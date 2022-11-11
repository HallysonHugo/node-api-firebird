import {selectResumo} from '../../service/database.js'

async function getResumo(dataInicial, dataFinal){
    try{
        let query = `select R.NITEM 
        , R.ITEM 
        , R.NSUBITEM 
        , R.SUBITEM 
        , R.VALOR 
        , coalesce(FP.DESCRICAO, '-') FORMA_PAGAMENTO 
    from  
        SP_RESUMODIARIO('${dataInicial}', '${dataFinal}', 1, 1, 1, 0, 0) R 
        left join FORMA_PAGAMENTO FP on (FP.CODIGO = R.SUBITEM) WHERE R.NSUBITEM = 0 
    order by  
        NITEM, NSUBITEM`
        let resumo = await selectResumo(query);
        return resumo;
    }
    catch(e){
        return e;
    }
   
    
}

async function getContasReceber(){

}

export { getResumo }
