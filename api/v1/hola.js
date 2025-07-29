const express = require('express');
const app = express();

app.use(express.json());

app.route("/mensaje")
    .get((req, res) => {
        return res.json({"mensaje": "Bienvendio a la version 1 de nuestra API!"});
    });

    