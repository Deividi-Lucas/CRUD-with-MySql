const express = require('express')
const app = express()
const db = require('./db')

app.get('/', (req, res) => {
  const result = db.pool.query('select * from list')
  res.send(result)
})

app.post('/', (req, res) => {
  let text = req.body
  const result = db.pool.query()
  res.send(result)
})

app.listen('3000', () => {
  console.log(`Servidor subiu  `)
})
