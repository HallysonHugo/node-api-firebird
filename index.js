import express from 'express';
import cors from 'cors';
const app = express()
import {resumoUrl, loginUrl} from './service/routes.js';
import {getResumo} from './controller/resumo_controller.js';

app.use(express.json());
app.use(cors());

app.get(loginUrl, (req, res)=>{
    var matricula = req.query.matricula;
    var senha = req.query.senha;
});


app.get(resumoUrl,(req, res )=>{
    var dataInicial = req.query.dataInicial;
    var dataFinal = req.query.dataFinal;
    getResumo(dataInicial, dataFinal);
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