const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bem-vindo!');
  } else if (req.url.startsWith('/saudacao/')) {
    const nome = req.url.split('/')[2];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Olá, ${nome.charAt(0).toUpperCase() + nome.slice(1)}!`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
  }
});

server.listen(4003, () => {
  console.log('Exercício 4 - Servidor rodando em http://localhost:4003');
});