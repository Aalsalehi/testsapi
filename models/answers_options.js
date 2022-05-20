'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answers_options extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Answers_options.init({
    options: DataTypes.STRING,
    correctAnswer: DataTypes.BOOLEAN,
    question_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Answers_options',
  });
  return Answers_options;
};