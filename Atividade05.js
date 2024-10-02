const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo ao meu servidor Express!</h1>');
});
app.get('/api/data', (req, res) => {
  res.json({
    nome: 'Seu Nome',
    idade: 25,
    profissao: 'Desenvolvedor'
  });
});

app.listen(4004, () => {
  console.log('Exercício 5 - Servidor Express rodando em http://localhost:4004');
});