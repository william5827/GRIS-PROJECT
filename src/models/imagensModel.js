var database = require("../database/config")

function imagensfunc() {

    instrucaoSql = `SELECT COUNT(id) AS 'qtnposts' FROM aviso;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    imagensfunc
};