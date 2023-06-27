const BookingsController = {};
const models = require("../models/index");

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
const { Op } = require("sequelize");


/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////


// CREATE NEW BOOKING 

BookingsController.newbooking = async (req, res) => {
     
      try {
        let book = req.body;  
        let newBooking = await models.create({
          status: book.status,
          description: book.description,
          createdAt: new Date(),
          deletedAt: null
        });
        console.log("llega hasta aquí ")
  
        res.status(201).json(newBooking);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el registro de booking' });
      }
    };
  

// GET ALL BOOKS

BookingsController.getAll = async (req, res) => {
    try {
      let resp = await models.Bookings.findAll({});
  
      res.send(resp);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener el listado' });
    }
  };

module.exports = BookingsController;
