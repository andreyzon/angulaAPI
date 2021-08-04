'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PermissionsRoles extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.PermissionsRoles.belongsTo(models.Permissions, {
                as: 'Permissions',
                foreignKey: 'permissionId',
                onDelete: 'CASCADE'
            });

            models.PermissionsRoles.belongsTo(models.Roles, {
                as: 'Roles',
                foreignKey: 'roleId',
                onDelete: 'CASCADE'
            });
        }
    };
    PermissionsRoles.init({
        permissionId: DataTypes.INTEGER,
        roleId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'PermissionsRoles',
        timestamps: false
    });
    return PermissionsRoles;
};