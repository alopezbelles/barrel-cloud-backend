const express = require("express");
const router = express.Router();

//Importamos modelo de datos
const BookingsController = require("../controllers/bookingController");

///// C R U D   B O O K S  /////

router.post("/newbooking", BookingsController.newbooking);
router.get("/getall", BookingsController.getAll);
router.delete("/delete/:id", BookingsController.delete);
router.put("/update", BookingsController.update);

module.exports = router;
