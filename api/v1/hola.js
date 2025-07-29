const express = require('express');
const router = express.Router();


router.get('/saludo', (req, res) => {
  res.status(200).json({"mensaje": '¡Bienvenido a la primera version de nuestra API!'});
});

module.exports = router;
