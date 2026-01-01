const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

// Listen for connection
io.on('connection', (socket) => {
    console.log('A user connected');
    // Listen for the emoji reaction event from a client
    socket.on('reaction', (emoji) => {
        console.log('Reaction received: ' + emoji);
        // Broadcast the emoji reaction to all connected clients
        io.emit('reaction', emoji);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

var port = process.env.port || 3000;

http.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});