const express = require("express");
const router = express.Router();

const Times = require('../controllers/times');

router.get('/', Times.teste);
router.post('/times/criar', Times.criar);
router.get('/times/listar', Times.listar);
router.get('/times/listar/:id', Times.listar);
router.put('/times/alterar', Times.alterar);
router.delete('/times/excluir/:id', Times.excluir);

module.exports = router