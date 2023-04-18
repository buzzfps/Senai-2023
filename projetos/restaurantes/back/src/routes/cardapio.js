const express = require("express");

const Cardapio = require("../controllers/cardapio");

const router = express.Router();

router.get("/cardapio", Cardapio.cardapio)

module.exports = router;