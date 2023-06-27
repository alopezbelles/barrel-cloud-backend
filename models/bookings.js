'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    static associate(models) {
      // define association here
    }
  }
  Bookings.init(
    {
      id_book: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [['active', 'pending', 'canceled']]
        }
      },
      createdAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
      description: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Bookings',
      timestamps: false
    }
  );
  return Bookings;
};
