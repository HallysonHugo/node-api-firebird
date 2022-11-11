import express from 'express';
import cors from 'cors';
const app = express()
import {resumoUrl, usuariosUrl} from './src/resumo/routes/routes.js';
import {loginUrl} from './src/login/routes/routes.js'
import { getResumo } from './src/resumo/controller/resumo_controller.js';


app.use(express.json());
app.use(cors());


app.get(loginUrl, (req, res)=>{
    var matricula = req.query.matricula;
    var senha = req.query.senha;
});





app.get(usuariosUrl, (req, res)=>{
    
})


app.get(resumoUrl,(req, res )=>{
    var dataInicial = req.query.dataInicial;
    var dataFinal = req.query.dataFinal;
    getResumo(dataInicial, dataFinal).then((value)=>{
        if(value != undefined){
            res.send(value);
        }
        else{
            res.sendStatus(400).send(value);
        }
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