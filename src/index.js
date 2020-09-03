const app = require('express')();

const options = {
    key: fs.readFileSync('./server-key.pem'),
    cert: fs.readFileSync('./server-cert.pem')
};

const server = require('https').createServer(app);
const io = require('socket.io')(server);
const { PORT = 3000 } = process.env;

// HTTP endpoints
require('./http')(app);

// WS server
require('./socket')(io);

server.listen(PORT, console.log(`\nListening on port ${PORT}.\n`));
