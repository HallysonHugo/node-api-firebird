var fb = require('firebird');

async function connectDb(){
    var conn = fb.createConnection();
    conn.connectSync('test.fdb', 'SYSDBA','masterkey');
    return conn;
}
    let CONTAS_CAIXA = 1
    let CONTAS_BANCARIAS = 1
    let CONTAS_OUTRAS = 1
    let RESPONSAVEL = 0  
    let IGNORAR_TRANSFERENCIAS = 0


module.exports =  async function selectResumo(){
    let conn = await connectDb();
    let result = await conn.query("select R.NITEM \
                , R.ITEM \
                , R.NSUBITEM \
                , R.SUBITEM \
                , R.VALOR \
                , coalesce(FP.DESCRICAO, '-') FORMA_PAGAMENTO \
            from  \
                SP_RESUMODIARIO(?, ?, ?, ?, ?, ?, ?) R \
                left join FORMA_PAGAMENTO FP on (FP.CODIGO = R.SUBITEM) WHERE R.NSUBITEM = 0 \
            order by  \
                NITEM, NSUBITEM", [
                    CONTAS_CAIXA, CONTAS_BANCARIAS, CONTAS_OUTRAS, RESPONSAVEL, IGNORAR_TRANSFERENCIAS
                ]);
    return result;
}
