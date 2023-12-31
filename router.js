const express = require("express");
const router = express.Router();

//Importamos Routes definidas en routes

const BookingsRoutes = require("./routes/bookingsRoutes");

// End-points CRUD Spots

router.use("/", BookingsRoutes);

module.exports = router;
