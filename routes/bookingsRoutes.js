const express = require('express')
const router = express.Router();


//Importamos modelo de datos
const BookingsController = require("../controllers/bookingController")

///// C R U D   S P O T S  /////

router.post("/newbooking",BookingsController.create)

module.exports = router;