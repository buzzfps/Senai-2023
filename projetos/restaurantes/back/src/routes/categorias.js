const express = require("express");

const Categoria = require("../controllers/categoria");

const router = express.Router();

router.get("/categorias", Categoria.categorias)

module.exports = router;