const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });
let count = 0;
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
   count += parseInt(data);
   ws.send(count);
  });
});