const express = require('express')
const router = express.Router();


//Importamos modelo de datos
const BookingsController = require("../controllers/bookingController")

///// C R U D   S P O T S  /////

router.post("/newbooking",BookingsController.newbooking)
router.get("/getall", BookingsController.getAll)
router.delete("/delete/:id", BookingsController.delete)
router.put("/update/:id", BookingsController.update)

module.exports = router;