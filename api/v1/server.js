const express = require('express');
const app = express();
const PORT = 3000;



app.route("/")
    .get((req, res) => {
        return res.send("Ruta principal");
    });


app.listen(PORT, () => {
    console.log(`Servidor en: http://localhost:${PORT}`);
});