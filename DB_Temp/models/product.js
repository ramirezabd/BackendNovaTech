"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {

    static associate(models) {
      product.hasOne(models.stock);

      product.belongsTo(models.kategori, {
        foreignKey: {
          name: "kategori_id",
        }
      })
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