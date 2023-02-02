"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class stocks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      stocks.hasMany(models.products,{
        foreignKey: product_id
      });
      models.products.belongsTo(stocks)
    }
  }
  stocks.init({
    product_id: DataTypes.INTEGER,
    stock: DataTypes.STRING
  }, {
    sequelize,
    modelName: "stocks",
    tableName: "stocks"
  });
  return stocks;
};