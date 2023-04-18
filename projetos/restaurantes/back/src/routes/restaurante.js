const express = require("express");

const Restaurante = require("../controllers/restaurante");

const router = express.Router();

router.get("/restaurantes/:id", Restaurante.restaurante)

module.exports = router;