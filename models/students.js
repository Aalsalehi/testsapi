"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Students.belongsTo(models.Roles, {
        foreignKey: "role_id",
      });
      Students.hasMany(models.Session_tests, {
        foreignKey: "student_id",
      });
    }
  }
  Students.init(
    {
      studentName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Students",
    }
  );
  return Students;
};
