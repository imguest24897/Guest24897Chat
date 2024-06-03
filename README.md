# Guest24897Chat 0.2.2 (Codename: Dark Fish)
Simple Websocket and HTML chat.

## How it works?
Node.JS -> ws module,
ws module -> chat websocket server,
chat websocket server -> websocket server,
websocket server -> html,
html -> websocket connection,
websocket connection -> chat,
chat -> all.

## Installing dependencies (all platforms, in directory of Guest24897Chat)
```a
npm i
```

## Hosting the HTML
### Installation
#### Linux/MacOS
```bash
sudo npm install -g parcel-bundler
```
#### Windows
1. Open cmd.exe as administrator
2. Execute following command:
```batch
npm install -g parcel-bundler
```
### Running (in directory of Guest24897Chat)
#### All platforms
```xd
npm start
```

## Running Websocket
To run Websocket for your chat, execute following command in directory of Guest24897Chat:
```xd
npm run start:server
```

Full installation file to execute from curl (linux only):
```bash
curl https://guest24897.serv00.net/guest24897chat-installation.sh | sudo bash
```
