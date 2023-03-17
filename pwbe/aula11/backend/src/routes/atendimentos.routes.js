const express = require('express');
const router = express.Router();

const Atendimentos = require('../controllers/atendimentos.controller');

router.post('/atendimento', Atendimentos.cadastrar);
router.get('/atendimentos', Atendimentos.listar);
router.put('/atendimento/:id', Atendimentos.alterar);
router.delete('/atendimento/:id', Atendimentos.remover);

module.exports = router;