const express = require('express');
const saludo = require('./hola');

const app = express();

app.get('/', (req, res) => {
  res.send('Ruta principal desde Vercel');
});

app.use("mensaje/", saludo);

app.listen(process.env.PORT, () => {
    console.log("Server running");
})