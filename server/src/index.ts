import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

app.get('/', (req, res) => res.send('OK'));

httpServer.listen(4000, () => console.log('Server running on port 4000')); 