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
  res.set('Content-Type', 'text/plain');
  res.send('Hello <strong>World!</strong>')
})

app.get('/demo2.html', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send('Demo 2 <strong>World!</strong>')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})