var imagemModel = require("../models/imagensModel");


function imagensfunc(req, res) {

    imagemModel.imagensfunc().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar imagens: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
    console.log("ENTRAMOS NA imagensController");
    res.json("ESTAMOS FUNCIONANDO! imagens");
}



module.exports = {
    imagensfunc
}