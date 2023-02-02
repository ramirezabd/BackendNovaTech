"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.hasMany(models.kategoris,{
        foreignKey: kategori_id
      });
      models.kategoris.belongsTo(products)
    }
  }
  products.init({
    kategori_id: DataTypes.INTEGER,
    tahun_keluaran: DataTypes.STRING,
    warna: DataTypes.STRING,
    harga: DataTypes.STRING
  }, {
    sequelize,
    modelName: "products",
    tableName: "products"
  });
  return products;
};