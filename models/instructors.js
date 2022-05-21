"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Instructors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Instructors.belongsTo(models.Roles, {
        foreignKey: "role_id",
      });
      Instructors.hasMany(models.Tests, {
        foreignKey: "instructor_id",
      });
    }
  }
  Instructors.init(
    {
      instructorName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role_id: DataTypes.INTEGER,
      info: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Instructors",
    }
  );
  return Instructors;
};
