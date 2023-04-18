const express = require("express");
const router = express.Router();

const Funcionario = require('../controllers/funcionario');

router.post('/criar', Funcionario.criar);
router.get('/listar', Funcionario.listarFuncionario);
router.get('/listar/:matricula', Funcionario.listarFuncionario);
router.put('/alterar', Funcionario.alterarFuncionario);
router.delete('/excluir/:matricula', Funcionario.excluirFuncionario);

module.exports = router