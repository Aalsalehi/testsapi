'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session_tests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Session_tests.init({
    result: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    test_key: DataTypes.STRING,
    test_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Session_tests',
  });
  return Session_tests;
};