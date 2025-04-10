//const express = require('express')
import express from 'express';

const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log('[Middleware-01]Time:', Date.now())
    next()
})

app.use((req, res, next) => {
    console.log('[Middleware-02]Time:', Date.now())
    next()
})

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send('Hello <strong>World!</strong>')
})


app.get('/demo.html', (req, res) => {
   
    var filePath = __dirname + '/demoContent.html';
    res.sendFile(filePath)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})