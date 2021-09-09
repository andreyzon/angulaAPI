'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Temperatures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Temperatures.belongsTo(models.Nodes, {
        as: 'Nodes',
        foreignKey: 'nodeId',
        onDelete: 'CASCADE'
      });
    }
  };
  Temperatures.init({
    nodeId: DataTypes.INTEGER,
    temperature: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Temperatures',
  });
  return Temperatures;
};