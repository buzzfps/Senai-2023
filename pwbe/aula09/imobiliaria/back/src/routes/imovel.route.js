const express = require("express");

const Imoveis = require ("../controllers/imovel.controllers")

const router = express.Router();

router.get("/imoveis", Imoveis.listar);
router.get("/imoveis/:info", Imoveis.buscar)
router.get("/imoveis/corretor/:id", Imoveis.imoveisPorCorretor)
router.put("/imovel/:codigo/:status", Imoveis.alterarStatus)
router.post("/imovel", Imoveis.adicionar);


module.exports = router;