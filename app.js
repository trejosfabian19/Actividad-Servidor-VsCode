
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡MI PRIMER SERVIDOR INICIADO CON REINICIO AUTOMATICO DE CARACTERES!');
});

const server = app.listen(port, () => {
  console.log('Servidor iniciado correctamente.');
  console.log('Escuchando:', server.listening);
});

server.on('close', () => {
  console.log('ALERTA: el servidor se ha cerrado.');
});

server.on('error', (error) => {
  console.log('Error del servidor:', error.message);
});
