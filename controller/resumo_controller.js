var database = require('../service/database')

module.exports =  async function getResumo(dataIni, dataFin){
    let result = await database.selectResumo();
    return result;
}