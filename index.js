const express = require('express')
const app = express()
const db = require('./db')

app.use(express.json())

// Command in SQL

// Create database name_of_database;

// create table name_of_table(info_of_table); //example column varchar(25)

// use name_of_database;

// insert into Name_of_database(name_of_table) values('Info');

app.get('/', (req, res) => {
  res.send('Ok ')
})

app.post('/create', (req, res) => {
  const { title, description } = req.body
  // falta inserir os dados no banco de dados já criado
  const select = db.pool.query('use todo')
  console.log(select)
  const InsertData = db.pool.query(
    `use todo; insert into list (title, description) values (${title}, ${description});`
  )
  console.log(InsertData)
  let response = [title, description]
  res.send(response)
})

app.post('/test', (req, res) => {
  const { title, description } = req.body
  res.send('enviado')
})

app.listen('3000', () => {
  console.log(`Servidor subiu  na porta 3000`)
})
