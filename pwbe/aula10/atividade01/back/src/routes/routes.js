const express = require ("express");

const router =  express.Router()

const Item = require('../controllers/controllers');


router.post('/concatenar', Item.concatenar)

module.exports = router;