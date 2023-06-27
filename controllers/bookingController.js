const BookingsController = {};
const models = require("../models/booking");

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
const { Op } = require("sequelize");


/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////


// CREATE NEW BOOKING 

BookingsController.create = async (req, res) => {
     
      try {
        const { status, description } = req.body;  
        const newBooking = await models.create({
          status,
          description,
          createdAt: new Date(),
          deletedAt: null
        });
  
        res.status(201).json(newBooking);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el registro de booking' });
      }
    };
  



module.exports = BookingsController;
