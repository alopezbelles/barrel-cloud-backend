"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Bookings",
      [
        {
          status: "active",
          createdAt: new Date(),
          deletedAt: null,
          description: "Amsterdam Booking",
        },
        {
          status: "pending",
          createdAt: new Date(),
          deletedAt: null,
          description: "Thailand Booking",
        },
        {
          status: "canceled",
          createdAt: new Date(),
          deletedAt: null,
          description: "New York Booking",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
