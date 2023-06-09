const maria = require('mariadb')
const config = require('dotenv').config()
const pass = process.env.Password
var pool = maria.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: `${pass}`
})

async function ShowDatabase() {
  let conn
  try {
    // conexão no banco de dados
    conn = await pool.getConnection()

    //    Criação de  banco de dados se não existe
    const NameDefault = await conn.query('Create database if not exists ToDo')
    console.log(NameDefault)

    // Seleção do banco de dados
    const useDatabase = await conn.query('use todo')
    console.log(useDatabase)

    // Criação da Tabela
    const CreateTableData = await conn.query(
      'create table if not exists list (title varchar(255), description varchar(255))'
    )
    console.log(CreateTableData)

    // Visualização de todos banco de dados
    const rows = await conn.query('show databases')
    console.log(rows)

    // Visualização das tabelas
    const table = await conn.query('show tables')
    console.log(table)
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

ShowDatabase()

module.exports = Object.freeze({
  pool: pool
})
