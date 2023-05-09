const express = require('express')
const app = express()

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'house',
  password: '2020',
  database: 'my_db'
})

connection.connect()
