const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bem-vindo!');
  } else if (req.url === '/sobre') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Sobre</h1><p>Esta é a pagina sobre</p>');
  } else if (req.url === '/contato') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Contato</h1><p>Estas sao as informacoes de contato</p>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
  }
});

server.listen(4001, () => {
  console.log('Exercício 2 - Servidor rodando em http://localhost:4001');
});