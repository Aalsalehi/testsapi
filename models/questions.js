"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Questions.belongsTo(models.Tests, {
        foreignKey: "test_id",
      });
      Questions.hasMany(models.Answers_options, {
        foreignKey: "question_id",
      });
    }
  }
  Questions.init(
    {
      question: DataTypes.STRING,
      test_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Questions",
    }
  );
  return Questions;
};
