import { Server } from 'socket.io';

const users = {};

export default function initializeSocket(server) {
    const io = new Server(server);

    io.on('connection', (socket) => {
        socket.on('new-user-joined', (name) => {
            users[socket.id] = name;
            socket.broadcast.emit('user-joined', name);
        });

        socket.on('send', (message) => {
            socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
        });

        socket.on('disconnect', () => {
            socket.broadcast.emit('left', users[socket.id]);
            delete users[socket.id];
        });
    });
}
