"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Match.belongsTo(models.User, {
        foreignKey: "playerOne",
        as: "playersatu",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
      Match.belongsTo(models.User, {
        foreignKey: "playerTwo",
        as: "playerdua",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }
  Match.init(
    {
      playerOne: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      playerOneValue: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      playerTwo: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      playerTwoValue: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Match",
      tableName: "matches",
    }
  );
  return Match;
};
