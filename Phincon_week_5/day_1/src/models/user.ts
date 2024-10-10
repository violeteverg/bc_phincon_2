import { DataTypes, literal, Model } from "sequelize";
import sequelize from "../config/db";
import Profile from "./profile";
import Role from "./role";
import UserRole from "./userRole";

interface user {
  id: number;
  us_fullname: string;
  us_username: string;
  us_email: string;
  us_phone_number: string;
  us_password: string;
  us_active: boolean;
  us_created_on: Date;
  us_created_by: number;
  us_update_on: Date;
  us_update_by: number;
}

class User extends Model<user> implements user {
  id!: number;
  us_fullname!: string;
  us_username!: string;
  us_email!: string;
  us_phone_number!: string;
  us_password: string;
  us_active!: boolean;
  us_created_on!: Date;
  us_created_by!: number;
  us_update_on!: Date;
  us_update_by!: number;

  static associate(models) {
    User.hasOne(models.Profile, {
      foreignKey: "pr_us_id",
      as: "profile",
    });
    User.belongsToMany(models.Role, {
      through: UserRole,
      foreignKey: "ur_us_id",
      as: "roles",
    });
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    us_fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    us_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    us_phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    us_created_on: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    us_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
    us_update_on: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    us_update_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "user",
    timestamps: false,
  }
);
// User.belongsToMany(Role, {
//   through: UserRole,
//   foreignKey: "ur_us_id",
//   as: "roles",
// });
// User.associate();

export default User;
