"use strict";

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const date = new Date();
    const daftarKategori = [
      // { nama: "", deskripsi: "", createdAt: date, updatedAt: date },
      { nama: "Honda", deskripsi: "Japanese public multinational conglomerate manufacturer of automobiles, motorcycles, and power equipment.", createdAt: date, updatedAt: date },
      { nama: "Yamaha Motor Company", deskripsi: "Japanese multinational manufacturer of motorcycles, marine products such as boats and outboard motors, and other motorized products.", createdAt: date, updatedAt: date },
      { nama: "Caterpillar Inc.", deskripsi: "American construction equipment manufacturer", createdAt: date, updatedAt: date },
    ]

    await queryInterface.bulkInsert("kategoris", daftarKategori, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("kategoris");
  }
};
