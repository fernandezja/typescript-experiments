import express from 'express';
import path from 'path';
import fs from 'fs';

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
  res.set('Content-Type', 'text/plain');
  res.send('Hello <strong>World!</strong>')
})  

app.get('/demo2.html', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send('Demo 2 <strong>World!</strong>')
  })


  app.get('/demo3.html', (req, res) => {
   
    const filePath = path.join(__dirname, 'demoContenido.html');
   
    const fileContent = fs.readFileSync(filePath, 'utf8');
    res.set('Content-Type', 'text/html');

    res.send(fileContent);
  })


  
  app.get('/demo4.html', (req, res) => {
    const filePath = path.join(__dirname, 'demoContenido.html');

    res.sendFile(filePath);
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})