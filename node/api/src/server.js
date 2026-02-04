import http from 'http';

const server = http.createServer((req, res) => {
  const { method } = req;

  return res.writeHead(200).end('Método: ' + method);
});

server.listen(3333);
