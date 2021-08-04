'use strict';

const bcrypt = require('bcryptjs');
const moment = require('moment');
const initialState = require('../../fields/seedUsersDatabase.json');

module.exports = {
    up: async (queryInterface, Sequelize) => { //eslint-disable-line
        let aux, auxRole, auxPermission;
        //let users_create = [];
        let permissions_create = [];
        let roles_create = [];
        console.log('Clear users');
        try {
            await queryInterface.bulkDelete('PermissionsRoles', null, {});
            await queryInterface.bulkDelete('Permissions', null, {});
            await queryInterface.bulkDelete('Roles', null, {});
            await queryInterface.bulkDelete('UsersRoles', null, {});
            await queryInterface.bulkDelete('Users', null, {});
        } catch (error) {
            console.error('Error Drop database');
            console.error('Error', error.message);
            throw (error);
        }

        console.log('Create Permissions');
        try {
            for (const index of initialState.permissions) {
                aux = await queryInterface.bulkInsert('Permissions', [index],
                    { returning: ['id', 'slug'] }, {});
                permissions_create.push(aux[0]);
            }
            permissions_create = await queryInterface.sequelize.query('SELECT * FROM Permissions', { type: queryInterface.sequelize.QueryTypes.SELECT });
            permissions_create = JSON.parse(JSON.stringify(permissions_create));
            console.log(permissions_create);
        } catch (error) {
            console.error('Error', error.message);
            throw (error);
        }

        console.log('Create Roles');
        try {
            for (const index of initialState.roles) {
                aux = await queryInterface.bulkInsert('Roles', [{
                    name: index.name,
                    slug: index.slug,
                    description: index.description
                }], { returning: ['id', 'slug', 'name'] }, {});
                let temp = await queryInterface.sequelize.query('SELECT * FROM Roles', { type: queryInterface.sequelize.QueryTypes.SELECT });
                roles_create = JSON.parse(JSON.stringify(temp));
                temp = temp.find(field => (field.slug === index.slug));
                for (const item of index.permissions) {
                    auxPermission = permissions_create.find(permission => (permission.slug === item));
                    console.log(auxPermission);
                    await queryInterface.bulkInsert('PermissionsRoles', [{ permissionId: auxPermission.id, roleId: temp.id }], {}, {});
                }
            }
        } catch (error) {
            console.error('Error', error.message);
            throw (error);
        }
        console.log('Create Users');
        try {
            for (const index of initialState.users) {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(index.password, salt);
                aux = await queryInterface.bulkInsert('Users', [{
                    username: index.username,
                    firstName: index.firstName,
                    lastName: index.lastName,
                    password: hashedPassword,
                    email: index.email,
                    createdAt: moment().format(),
                    updatedAt: moment().format()
                }], { returning: ['id'] }, {});
                let temp2 = await queryInterface.sequelize.query('SELECT * FROM Users', { type: queryInterface.sequelize.QueryTypes.SELECT });
                //users_create = JSON.parse(JSON.stringify(temp2));
                temp2 = temp2.find(field => (field.username === index.username));
                console;
                auxRole = roles_create.find(role => (role.name === index.role));
                await queryInterface.bulkInsert('UsersRoles', [{ userId: temp2.id, roleId: auxRole.id }], {}, {});
            }
        } catch (error) {
            console.error('Error', error.message);
            throw (error);
        }
    },

    down: async (queryInterface, Sequelize) => { //eslint-disable-line
        try {
            await queryInterface.bulkDelete('PermissionsRoles', null, {});
            await queryInterface.bulkDelete('Permissions', null, {});
            await queryInterface.bulkDelete('Roles', null, {});
            await queryInterface.bulkDelete('UsersRoles', null, {});
            await queryInterface.bulkDelete('Users', null, {});
        } catch (error) {
            console.error('Error Drop database');
            console.error('Error', error.message);
        }
    }
};