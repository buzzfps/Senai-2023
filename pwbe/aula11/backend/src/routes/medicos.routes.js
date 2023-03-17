const express = require('express');
const router = express.Router();

const Medicos = require('../controllers/medicos.controller');

router.post('/medico', Medicos.cadastrar);
router.get('/medicos', Medicos.listar);

module.exports = router;