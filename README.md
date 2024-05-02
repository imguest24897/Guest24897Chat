# Guest24897Chat
Simple Websocket and HTML chat.

> [!WARNING]
> Notice that current release status is currently pre-beta. Pre-betas and betas are unstable, and it can cause errors, bugs or problems with chat.
> If you have any questions or bug reports or any ideas, email me at support@guest24897.serv00.net.

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
parcel index.html
```

## Running Websocket
To run Websocket for your chat, execute following command in directory of Guest24897Chat:
```npm
npm run startserver
```

Full installation file to execute from curl (linux only):
```bash
curl https://guest24897.serv00.net/guest24897chat-installation.sh | bash
```
