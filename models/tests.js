'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tests.init({
    title: DataTypes.STRING,
    start_at: DataTypes.DATE,
    end_at: DataTypes.DATE,
    description: DataTypes.STRING,
    instructor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tests',
  });
  return Tests;
};