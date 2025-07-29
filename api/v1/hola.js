const express = require('express');
const router = express.Router();

router.get('/saludo', (req, res) => {
  res.send('¡Bienvenido a la primera version de nuestra API!');
});

module.exports = router;
