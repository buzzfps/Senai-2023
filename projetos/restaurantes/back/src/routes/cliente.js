const express = require("express");

const router = express.Router();

const Cliente = require("../controllers/cliente");

router.post("/cliente", Cliente.adicionar);
router.get("/listar", Cliente.listar)
router.post("/login", Cliente.autenticar);

module.exports = router;