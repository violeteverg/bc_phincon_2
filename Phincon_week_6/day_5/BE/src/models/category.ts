import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

interface category {
  id: number;
  name: string;
}

class Category extends Model<category> implements category {
  id: number;
  name: string;

  static associate(models) {
    Category.hasMany(models.Product, {
      foreignKey: "categoryId",
      as: "products",
    });
  }
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Category",
    tableName: "Categories",
  }
);

export default Category;
