'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Permissions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            slug: {
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            }
        }, {
            timestamps: false
        }
        );
    },
    down: async (queryInterface, Sequelize) => { //eslint-disable-line
        await queryInterface.dropTable('Permissions');
    }
};