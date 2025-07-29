const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.get('/', (req, res) => {
  res.send('Servidor Express funcionando 🎉');
});

app.listen(process.env.PORT, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
