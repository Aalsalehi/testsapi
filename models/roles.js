"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Roles.hasMany(models.Permissions, {
        foreignKey: "role_id",
      });
      Roles.hasMany(models.Admins, {
        foreignKey: "role_id",
      });
      Roles.hasMany(models.Students, {
        foreignKey: "role_id",
      });
      Roles.hasMany(models.Instructors, {
        foreignKey: "role_id",
      });
    }
  }
  Roles.init(
    {
      roleName: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Roles",
    }
  );
  return Roles;
};
