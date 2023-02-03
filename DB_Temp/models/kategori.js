"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kategori extends Model {

    static associate(models) {
      kategori.hasMany(models.product)
    }
  }
  kategori.init({
    nama: DataTypes.STRING,
    deskripsi: DataTypes.TEXT
  }, {
    sequelize,
    modelName: "kategori",
    tableName: "kategoris",
  });
  return kategori;
};