'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const date = new Date();
    const daftar = [
      // { kategoriId: "", tahun_keluaran: "", warna: "", harga: "", createdAt: date, updatedAt: date },
      { kategori_id: "1", tahun_keluaran: "1998", warna: "Hijau", harga: "300", createdAt: date, updatedAt: date },
      { kategori_id: "2", tahun_keluaran: "2003", warna: "Merah", harga: "5000", createdAt: date, updatedAt: date },
      { kategori_id: "2", tahun_keluaran: "2004", warna: "Biru", harga: "8000", createdAt: date, updatedAt: date },
      { kategori_id: "3", tahun_keluaran: "2010", warna: "Tosca", harga: "23000", createdAt: date, updatedAt: date },
      { kategori_id: "3", tahun_keluaran: "2015", warna: "Magenta", harga: "50000", createdAt: date, updatedAt: date },
      { kategori_id: "3", tahun_keluaran: "2019", warna: "Jingga", harga: "75000", createdAt: date, updatedAt: date },
    ];

    await queryInterface.bulkInsert("products", daftar, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products")
  }
};
