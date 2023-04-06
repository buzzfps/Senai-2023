const express = require('express');
const router = express.Router();

const Avlfisica = require('../controllers/avlfisica')

router.get('/listar', Avlfisica.listar)
router.post('/criar', Avlfisica.criar)

module.exports = router