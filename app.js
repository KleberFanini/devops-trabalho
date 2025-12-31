const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World - Dev');
});

const PORT = 80;
app.listen(PORT, '0.0.0.0', () => {
  console.log('Servidor rodando na porta 80');
});
