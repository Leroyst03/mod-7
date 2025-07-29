const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.route("/")
    .get((req, res) => {
        return res.send("Ruta principal");
    });


app.listen(process.env.PORT, () => {
    console.log(`Servidor en: http://localhost:${PORT}`);
});