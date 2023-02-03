"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class stock extends Model {

    static associate(models) {
      stock.belongsTo(models.product, {
        foreignKey: {
          name: "product_id",
        }
      })
    }
  }
  stock.init({
    product_id: DataTypes.INTEGER,
    stock: DataTypes.STRING
  }, {
    sequelize,
    modelName: "stock",
    tableName: "stocks",
  });
  return stock;
};