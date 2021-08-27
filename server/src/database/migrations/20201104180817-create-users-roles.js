'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('UsersRoles', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id',
                    as: 'userId'
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
        }, {
            timestamps: false
        }
        );
    },
    down: async (queryInterface, Sequelize) => { //eslint-disable-line
        await queryInterface.dropTable('UsersRoles');
    }
};