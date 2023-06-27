const BookingsController = {};
const models = require("../models/index");

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
const { Op } = require("sequelize");

/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

// CREATE NEW BOOKING

BookingsController.newbooking = async (req, res) => {
  try {
    let book = req.body;
    let newBooking = await models.Bookings.create({
      status: book.status,
      description: book.description,
      createdAt: new Date(),
      deletedAt: null,
    });
    console.log("llega hasta aquí ");

    res.status(201).json(newBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el registro de booking" });
  }
};

// GET ALL BOOKS

BookingsController.getAll = async (req, res) => {
  try {
    let resp = await models.Bookings.findAll({});

    res.send(resp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el listado" });
  }
};

// DELETE BOOKS

BookingsController.delete = async (req, res) => {
  try {
    let id = req.params.id;
    let resp = await models.Bookings.destroy({
      where: { id_book: id },
    });

    if (resp == 1) {
      res.send("Se ha eliminado el spot");
    } else {
      res.send("No se ha podido eliminar el spot");
    }
  } catch (err) {
    res.send(err);
  }
};

// UPDATE BOOKS

BookingsController.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Buscar el registro por el id_book
    const booking = await models.Bookings.findOne({ where: { id_book: id } });

    if (!booking) {
      // Si no se encuentra el registro, devolver un mensaje de error
      return res
        .status(404)
        .json({ message: "No se encontró el registro de booking" });
    }

    // Actualizar el campo "status" del registro
    booking.status = status;
    await booking.save();

    res.status(200).json({ message: "Registro actualizado exitosamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al actualizar el registro de booking" });
  }
};

module.exports = BookingsController;
