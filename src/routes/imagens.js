var express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
var router = express.Router();

var imagensController = require("../controllers/imagensController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/contar", function (req,res){
    imagensController.imagensfunc(req,res);
});

module.exports = router;