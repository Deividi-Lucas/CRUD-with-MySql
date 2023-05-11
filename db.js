const maria = require('mariadb')
const config = require('dotenv').config()
const pass = process.env.Password
var pool = maria.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: `${pass}`,
  database: 'list'
})

module.exports = Object.freeze({
  pool: pool
})
