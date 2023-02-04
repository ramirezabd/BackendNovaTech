'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const date = new Date();
    const daftarStock = [
      // {product_id: "", stock: "", createdAt: date, updatedAt: date },
      { product_id: "1", stock: "99", createdAt: date, updatedAt: date },
      { product_id: "2", stock: "43", createdAt: date, updatedAt: date },
      { product_id: "3", stock: "23", createdAt: date, updatedAt: date },
      { product_id: "4", stock: "42", createdAt: date, updatedAt: date },
      { product_id: "5", stock: "55", createdAt: date, updatedAt: date },
      { product_id: "6", stock: "22", createdAt: date, updatedAt: date },
    ]
    await queryInterface.bulkInsert("stocks", daftarStock, {})

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("stocks")
  }
};
