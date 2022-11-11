import firebird from "node-firebird"

const dbOptions = {
    host: '10.10.10.197',
    port: '3050',
    database: 'c:\\MIDAS\\DADOS\\mercado.fdb',
    user: 'SYSDBA',
    password: 'masterkey'
}
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


