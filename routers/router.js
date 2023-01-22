const express = require("express");
const router = express.Router();
const coreController = require("../controllers/core")

router.get("/",coreController.inicio);

router.get("/horario",coreController.horario);

router.get("/Noticia",coreController.viewNoticia);

router.post("/newPrograma",coreController.newPrograma);

module.exports = router;