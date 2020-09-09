const app = require('express')();

const { PORT = 3000 } = process.env;

const server = require('http').createServer(app);
const io = require('socket.io')(server);

// HTTP endpoints
require('./http')(app);

// WS server
require('./socket')(io);

server.listen(PORT, console.log(`\nListening on port ${PORT}.\n`));
