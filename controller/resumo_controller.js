import {selectResumo} from '../service/database.js'

async function getResumo(dataInicial, dataFinal){
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
    console.log(query)
    let resumo = await selectResumo(query);
    return resumo;
    
}

async function getContasReceber(){

}

export { getResumo }
