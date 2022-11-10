const express = require("express");
const app = express()
const routes = require('./service/routes')
var resumo_controller = require('./controller/resumo_controller')


app.get(routes.login, (req, res)=>{
    var matricula = req.query.matricula;
    var senha = req.query.senha;
});


app.get(routes.resumo,(req, res )=>{
    var dataInicial = req.query.dataInicial;
    var dataFinal = req.query.dataFinal;
    resumo_controller.getResumo(dataInicial, dataFinal);
    res.status(200).json({'teste':'certo'});
});

app.listen(3000,function(error){
    if(error){
     console.log('erro')
    }
    else{
        console.log('tudo certo')
    }
})  