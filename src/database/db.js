//importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()
//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

///utilizar o objeto de banco de dados para nossas operações
 db.serialize(() => {
//     //comandos sql para:
//     //criar tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

//     //inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);   
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "nº 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData) 
    
    

    // //consultar dados da tabela
    // db.all(`SELECT * name FROM places`, function(err, rows) {
    //   if(err) {
    //     return console.log(err)
    //   }

    //   console.log("Aqui estão seus registros:")
    //   console.log(rows)

    // })
    // //deletar um dado da tabela
    db.run(`DELETE FROM places WHERE id = ?`, [30], function(err) {
      if(err) {
        return console.log(err)
      }

      console.log("Registro deletado com sucesso!")
    })

   })


    