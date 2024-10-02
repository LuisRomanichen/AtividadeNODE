const http = require('http');
const gerarNumeroAleatorio = require('./utils');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bem-vindo!');
  } else if (req.url === '/numero') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Número aleatório: ${gerarNumeroAleatorio()}`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
  }
});

server.listen(4002, () => {
  console.log('Exercício 3 - Servidor rodando em http://localhost:4002');
});