'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Records.belongsTo(models.Nodes, {
        as: 'Nodes',
        foreignKey: 'nodeId',
        onDelete: 'CASCADE'
      });
    }
  };
  Records.init({
    nodeId: DataTypes.INTEGER,
    temperature: DataTypes.STRING,
    ip: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Records',
  });
  return Records;
};