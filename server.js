const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5152 });

// Define the banned IP address
const bannedIP = '';

wss.on('connection', function connection(ws, req) {
    const ip = req.socket.remoteAddress;
    console.log(' • New WebSocket connection from IP:', ip);

    // Check if the connection is from a banned IP address
    if (ip === bannedIP) {
        console.log(' ⨯ Rejected WebSocket connection from banned IP:', ip);
        ws.terminate(); // Terminate the connection
        return;
    }

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
            console.error(' ⨯ Error parsing JSON:', error);
        }
    });
});

console.log(' • WebSocket server is running on port 5152');

