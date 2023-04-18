const express = require("express");

const Avaliacao = require("../controllers/avaliacao");

const router = express.Router();

router.post("/avaliacao", Avaliacao.cadastro);
router.get("/mostrar", Avaliacao.mostrar);

module.exports = router;