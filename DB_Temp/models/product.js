"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsTo(models.kategori, {
        foreignKey: "kategori_id",
      });
    }
  }
  product.init({
    kategori_id: DataTypes.INTEGER,
    tahun_keluaran: DataTypes.STRING,
    warna: DataTypes.STRING,
    harga: DataTypes.STRING
  }, {
    sequelize,
    modelName: "product",
    tableName: "products",
  });
  return product;
};