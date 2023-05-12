const express = require('express')
const app = express()
const db = require('./db')

// Command in SQL

// Create database name_of_database;

// create table name_of_table(info_of_table); //example column varchar(25)

// use name_of_database;

// insert into Name_of_database(name_of_table) values('Info');

app.get('/', (req, res) => {
  const result = db.pool.query('show databases;') // database no selected
  res.send()
})

app.post('/', (req, res) => {
  let text = req.body
  res.send(text)
})

app.listen('3000', () => {
  console.log(`Servidor subiu  `)
})
