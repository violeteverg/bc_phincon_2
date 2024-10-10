import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../config/db";

interface token {
  tkn_id: number;
  tkn_type: string;
  tkn_value: string;
  tkn_description: string;
  tkn_client_ip: string;
  tkn_client_agent: string;
  tkn_us_id: number;
  tkn_expired_on: Date;
  tkn_active: boolean;
  tkn_created_on: Date;
  tkn_created_by: number;
  tkn_updated_on: Date;
  tkn_updated_by: number;
}

class Token extends Model<token> implements token {
  tkn_id!: number;
  tkn_type!: string;
  tkn_value!: string;
  tkn_description!: string;
  tkn_client_ip!: string;
  tkn_client_agent!: string;
  tkn_us_id!: number;
  tkn_expired_on!: Date;
  tkn_active!: boolean;
  tkn_created_on!: Date;
  tkn_created_by!: number;
  tkn_updated_on!: Date;
  tkn_updated_by!: number;
}

Token.init(
  {
    tkn_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tkn_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tkn_value: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tkn_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tkn_client_ip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tkn_client_agent: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tkn_us_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tkn_expired_on: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    tkn_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    tkn_created_on: {
      allowNull: true,
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tkn_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tkn_updated_on: {
      allowNull: true,
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tkn_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Token",
    tableName: "tokens",
    timestamps: false,
  }
);

export default Token;
