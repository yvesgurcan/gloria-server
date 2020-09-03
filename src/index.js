const fs = require('fs');
const app = require('express')();

const { PORT = 3000, MODE = 'prod' } = process.env;

let server;
if (MODE === 'prod') {
    const options = {
        key: fs.readFileSync('../server-key.pem'),
        cert: fs.readFileSync('../server-cert.pem')
    };
    server = require('https').createServer(options, app);
} else {
    server = require('http').createServer(app);
}
const io = require('socket.io')(server);

// HTTP endpoints
require('./http')(app);

// WS server
require('./socket')(io);

server.listen(PORT, console.log(`\nListening on port ${PORT}.\n`));
