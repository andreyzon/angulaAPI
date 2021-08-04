const { Users, Roles, UsersRoles, sequelize } = require('../../database/models');

const createUser = async (username, firstName, lastName, email, password, role = 'customer') => {
    let roleId;
    try {
        roleId = await Roles.findOne({
            attributes: ['id'],
            where: { name: role }
        });
        if (!roleId) {
            throw ({ internalMessage: { detail: `${role} not exist`, internalCode: 400 } });
        }
        roleId = roleId.toJSON().id;
    } catch (error) {
        throw (error);
    }
    try {
        let newUser = await Users.create({ username, firstName, lastName, email, password });
        newUser = JSON.parse(JSON.stringify(newUser));
        await UsersRoles.create({ userId: newUser.id, roleId });
        delete newUser['password'];
        return newUser;
    } catch (error) {
        throw (error);
    }
};

const getUser = async (id = Number) => {
    try {
        let user = await Users.findOne({
            where: { id },
            attributes: { exclude: ['password'] }
        });
        user = JSON.parse(JSON.stringify(user));
        if (!user) {
            throw ({ internalMessage: { detail: `${user} not exist`, internalCode: 400 } });
        }
        const scopes = await sequelize.query(`SELECT r.name as "role", p.name, p.slug  
        FROM UsersRoles as ur
        JOIN Roles as r
        ON ur."roleId" = r.id
        JOIN Users as u
        ON ur."userId" = u.id
        JOIN PermissionsRoles as pr
        ON r.id=pr."roleId"
        JOIN Permissions as p
        ON pr."permissionId" = p.id
        WHERE u.id = :userId`, { replacements: { userId: user.id }, type: sequelize.QueryTypes.SELECT });
        return { ...user, role: scopes[0].role, scopes };
    } catch (error) {
        throw (error);
    }
};

const listUsers = async (username = undefined, email = undefined) => {
    let query = {};
    if (username) query.username = username;
    if (email) query.email = email;
    let users = await Users.findAll({
        where: query,
        attributes: { exclude: ['password'] }
    });
    return JSON.parse(JSON.stringify(users));
};

module.exports = {
    createUser,
    getUser,
    listUsers
};