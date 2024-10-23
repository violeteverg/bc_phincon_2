import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

interface ProductAttributes {
  id: number;
  name: string;
  price: number;
  stock: number;
  categoryId: number;
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public stock!: number;
  public categoryId!: number;

  static associate(models) {
    Product.belongsTo(models.Category, {
      foreignKey: "categoryId",
      as: "category",
    });
  }
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Products",
    tableName: "Product",
    // timestamps: true,
  }
);

export default Product;
