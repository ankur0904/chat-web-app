import signUpController from './controller/signUpController.js';
import loginController from './controller/loginController.js';

const users = {};
import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static('public', {index: false}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json());

app.post('/signup', signUpController);
app.post('/login', loginController);
app.post('/initializeSocket', (req, res) => {
    initializeSocket(server);
    res.send('Socket initialized');
});

io.on('connection', (socket) => {
  socket.on('send', (message)=>{
    socket.broadcast.emit('receive', {message: message, name: users[socket.id]})    
  })
});

server.listen(8000, () => {
  console.log('server running at http://localhost:8000');
});