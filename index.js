import express from 'express';
//import cors from 'cors';
const app = express()
import {resumoUrl, loginUrl} from './service/routes.js';
import { getResumo} from './controller/resumo_controller.js';


app.use(express.json());
//app.use(cors());

let carregando = false;

app.get(loginUrl, (req, res)=>{
    var matricula = req.query.matricula;
    var senha = req.query.senha;
});


app.get(resumoUrl,(req, res )=>{
    carregando = true;
    var dataInicial = req.query.dataInicial;
    var dataFinal = req.query.dataFinal;
    getResumo(dataInicial, dataFinal).then((value)=>{
        console.log(value)
        res.send(value)
    });
    
});

app.listen(3000,function(error){
    if(error){
     console.log('erro')
    }
    else{
        console.log('tudo certo')
    }
})  