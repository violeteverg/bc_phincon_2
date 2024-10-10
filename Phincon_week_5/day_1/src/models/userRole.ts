import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

interface userRole {
  ur_id: number;
  ur_us_id: number;
  ur_rl_id: number;
  ur_active: boolean;
  ur_created_on: Date;
  ur_created_by: number;
  ur_updated_on: Date;
  ur_updated_by: number;
}

class UserRole extends Model<userRole> implements userRole {
  ur_id!: number;
  ur_us_id!: number;
  ur_rl_id!: number;
  ur_active!: boolean;
  ur_created_on!: Date;
  ur_created_by!: number;
  ur_updated_on!: Date;
  ur_updated_by!: number;
}

UserRole.init(
  {
    ur_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ur_us_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ur_rl_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ur_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    ur_created_on: {
      allowNull: true,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    ur_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ur_updated_on: {
      allowNull: true,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    ur_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "UserRole",
    tableName: "users_roles",
    timestamps: false,
  }
);

export default UserRole;
