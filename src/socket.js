module.exports = (http) => {

    const io = require('socket.io')(http);

    io.on('connection', (socket) => {
        console.log('A new user has connected !!!');

        socket.on('chat-message', (msg) => {
            socket.emit('chat-message', (msg));
        });

        socket.on('disconnect' , () =>{
            console.log('An User has disconnected');
        });

    });
    
}