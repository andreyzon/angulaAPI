'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class UsersRoles extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) { //eslint-disable-line
            // define association here
            models.UsersRoles.belongsTo(models.Users, {
                as: 'Users',
                foreignKey: 'userId',
                onDelete: 'CASCADE'
            });

            models.UsersRoles.belongsTo(models.Roles, {
                as: 'Roles',
                foreignKey: 'roleId',
                onDelete: 'CASCADE'
            });
        }
    };
    UsersRoles.init({
        userId: DataTypes.INTEGER,
        roleId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'UsersRoles',
        timestamps: false
    });
    return UsersRoles;
};