const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { PORT = 3000 } = process.env;

// HTTP endpoints
require('./http')(app);

server.listen(PORT, console.log(`\nListening on port ${PORT}.\n`));

module.exports = { app, server, io };
