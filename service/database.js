import firebird from "node-firebird"

const dbOptions = {
    host: '10.10.10.197',
    port: '3050',
    database: 'c:\\MIDAS\\DADOS\\mercado.fdb',
    user: 'SYSDBA',
    password: 'masterkey'
}


// export async function selectResumo(){
//     let conn = await connectDb();
//     let result = await conn.query("select R.NITEM \
//                 , R.ITEM \
//                 , R.NSUBITEM \
//                 , R.SUBITEM \
//                 , R.VALOR \
//                 , coalesce(FP.DESCRICAO, '-') FORMA_PAGAMENTO \
//             from  \
//                 SP_RESUMODIARIO(?, ?, ?, ?, ?, ?, ?) R \
//                 left join FORMA_PAGAMENTO FP on (FP.CODIGO = R.SUBITEM) WHERE R.NSUBITEM = 0 \
//             order by  \
//                 NITEM, NSUBITEM", [
//                     CONTAS_CAIXA, CONTAS_BANCARIAS, CONTAS_OUTRAS, RESPONSAVEL, IGNORAR_TRANSFERENCIAS
//                 ]);
//     return result;
// }


// export async function selectResumo(){
//    firebird.attach(dbOptions, function(err, db) {
//         if (err)
//             throw err;
//         db.query("select first 1 descricao from produtos", function(err, result) {
//             resumo = result;
//             console.log(resumo);
//         });
//     });
// }
const pool = firebird.pool(1, dbOptions);

export const selectResumo = (query) => {
    return new Promise((resolver, rejeitar) => {
      pool.get((err, db) => {
        if (err) {
          rejeitar(err);
          return;
        }
        db.query(query, (erro, resultado) => {
          if (erro) {
            rejeitar(err);
            return;
          }
          db.detach();
          resolver(resultado);
        });
      });
    });
  }


