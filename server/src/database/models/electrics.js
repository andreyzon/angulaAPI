'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Electrics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Electrics.belongsTo(models.Nodes, {
        as: 'Nodes',
        foreignKey: 'nodeId',
        onDelete: 'CASCADE'
      });
    }
  };
  Electrics.init({
    nodeId: DataTypes.INTEGER,
    electric: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Electrics',
  });
  return Electrics;
};