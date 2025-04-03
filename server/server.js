import http from 'http';
import 'dotenv/config'
import app from './app.js'


const PORT = process.env.PORT | 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});