const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5152 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        try {
            const data = JSON.parse(message);
            // Broadcast received message to all clients
            wss.clients.forEach(function each(client) {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(data));
                }
            });
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    });
});

