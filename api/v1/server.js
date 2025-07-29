const express = require('express');
const dotenv = require('dotenv');
const app = express();
const saludo = require('./hola');
dotenv.config();

app.route("/")
    .get((req, res) => {
        return res.send("Ruta principal");
    });

app.use('/mensaje', saludo);


app.listen(process.env.PORT, () => {
    console.log(`Servidor en: http://localhost:${process.env.PORT}`);
});