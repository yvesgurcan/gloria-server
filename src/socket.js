const { io } = require('./');

io.on('connection', socket => {
    console.log('a user connected');
});
