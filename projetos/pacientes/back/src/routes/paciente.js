const express = require('express');
const router = express.Router();

const Paciente = require('../controllers/paciente')

router.post ('/criar', Paciente.criar)
router.get ('/listar', Paciente.mostrarPaciente)
router.get ('/listar/:id', Paciente.mostrarPaciente)
router.put ('/alterar', Paciente.alterarPaciente )
router.delete ('/excluir/:id', Paciente.excluirPaciente)

module.exports = router