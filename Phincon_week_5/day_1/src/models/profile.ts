import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
import User from "./user";

interface profile {
  pr_id: number;
  pr_us_id: number;
  pr_gender: string;
  pr_description: string;
  pr_address: string;
  pr_active: boolean;
  pr_created_on: Date;
  pr_created_by: number;
  pr_updated_on: Date;
  pr_updated_by: number;
}

class Profile extends Model<profile> implements profile {
  pr_id!: number;
  pr_us_id!: number;
  pr_gender!: string;
  pr_description!: string;
  pr_address!: string;
  pr_active!: boolean;
  pr_created_on!: Date;
  pr_created_by!: number;
  pr_updated_on!: Date;
  pr_updated_by!: number;

  static associate(models) {
    Profile.belongsTo(models.User, {
      foreignKey: "pr_us_id",
      as: "user",
    });
  }
}

Profile.init(
  {
    pr_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    pr_us_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      unique: true,
    },
    pr_gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pr_description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    pr_address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    pr_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    pr_created_on: {
      allowNull: true,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    pr_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pr_updated_on: {
      allowNull: true,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    pr_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Profile",
    tableName: "profiles",
    timestamps: false,
  }
);

export default Profile;
