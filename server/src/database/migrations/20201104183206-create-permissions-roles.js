'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('PermissionsRoles', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            permissionId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Permissions',
                    key: 'id',
                    as: 'permissionId'
                },
                onDelete: 'CASCADE'
            },
            roleId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Roles',
                    key: 'id',
                    as: 'roleId'
                },
                onDelete: 'CASCADE'
            }
        },
            {
                timestamps: false
            }
        );
    },
    down: async (queryInterface, Sequelize) => { //eslint-disable-line
        await queryInterface.dropTable('PermissionsRoles');
    }
};