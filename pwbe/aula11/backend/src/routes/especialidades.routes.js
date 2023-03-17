const express = require('express');
const router = express.Router();

const Especialidades = require('../controllers/especialidades.controller');

router.post('/especialidade', Especialidades.cadastrar);
router.get('/especialidades', Especialidades.listar);

module.exports = router;