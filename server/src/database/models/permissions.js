'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Permissions extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.Permissions.belongsToMany(models.Roles, { through: models.PermissionsRoles, foreignKey: 'permissionId' });
        }
    };
    Permissions.init({
        slug: DataTypes.STRING,
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Permissions',
    });
    return Permissions;
};