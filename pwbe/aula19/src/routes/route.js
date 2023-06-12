const express = require("express");

const router = express.Router();

const Usuario = require("../controllers/controllers");

router.post("/login", Usuario.autenticar);
router.get("/listar", Usuario.listar);
router.put("/update", Usuario.alterar);

module.exports = router;