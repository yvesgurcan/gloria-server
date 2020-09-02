module.exports = io => {
    io.on('connection', socket => {
        console.log(`User ${socket.id} connected`);
        socket.join(socket.id, () => {
            console.log(`Room ${socket.id} created.`);
        });

        socket.on('disconnect', () => {
            console.log(`User ${socket.id} disconnected`);
            socket.to(socket.id).emit('message', `User ${socket.id} has left.`);
        });

        socket.on('joinRoom', roomId => {
            console.log(
                `User ${socket.id} has requested to join room ${roomId}.`
            );
            socket.join(roomId, () => {
                console.log(`User ${socket.id} has joined room ${roomId}.`);
            });
        });

        socket.on('message', ({ input, roomId }) => {
            socket.nsp.to(roomId).emit('message', input);
        });
    });
};
