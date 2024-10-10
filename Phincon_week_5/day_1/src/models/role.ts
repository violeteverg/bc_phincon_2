import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
import User from "./user";
import UserRole from "./userRole";

interface role {
  rl_id: number;
  rl_code: string;
  rl_name: string;
  rl_active: boolean;
  rl_created_on: Date;
  rl_created_by: number;
  rl_updated_on: Date;
  rl_updated_by: number;
}

class Role extends Model<role> implements role {
  rl_id!: number;
  rl_code!: string;
  rl_name!: string;
  rl_active!: boolean;
  rl_created_on!: Date;
  rl_created_by!: number;
  rl_updated_on!: Date;
  rl_updated_by!: number;
}

Role.init(
  {
    rl_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rl_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    rl_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rl_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    rl_created_on: {
      allowNull: true,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    rl_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rl_updated_on: {
      allowNull: true,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    rl_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Role",
    tableName: "roles",
    timestamps: false,
  }
);

Role.belongsToMany(User, {
  through: UserRole,
  foreignKey: "ur_rl_id",
  as: "users",
});

export default Role;
