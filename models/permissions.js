"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Permissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Permissions.belongsTo(models.Roles, {
        foreignKey: "role_id",
      });
    }
  }
  Permissions.init(
    {
      role_id: DataTypes.INTEGER,
      permissionName: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Permissions",
    }
  );
  return Permissions;
};
