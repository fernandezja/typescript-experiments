//const express = require('express')
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express()
const port = 3000

const alumnosList: { id: number; nombre: string; edad: number }[] = [
  { id: 1, nombre: 'Juan', edad: 20 },
  { id: 2, nombre: 'María', edad: 22 },
  { id: 3, nombre: 'Pedro', edad: 21 }
];

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

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



app.get('/alumnos', (req, res) => {
  
    res.set('Content-Type', 'application/json');
    
    
    res.json(alumnosList);
    
  });

  
  app.post('/alumnos', (req, res) => {
    res.set('Content-Type', 'application/json');
    
    const newAlumno = req.body;
    console.log(newAlumno);
    
    alumnosList.push(newAlumno);

    res.status(201).json({
      message: 'Alumno created successfully',
      alumno: newAlumno
    });

  });
  
  

  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})