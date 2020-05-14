const express = require('express');
const http = require("http");
const socketIo = require("socket.io");
const router = require('./routes/router');
const cors = require("cors");
const bodyParser = require("body-parser");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./user");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors())
app.use(router)

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) =>{

    socket.on("join", ({name, room}, callback) => {
        const { error, user } = addUser({ id:socket.id, name, room });
        if(error)
            return callback({ error });
        
            socket.emit('newMessage', { user: 'admin', text:`${user.name}, bienvenue dans la room ${user.room}`});
            socket.broadcast.to(user.room).emit('newMessage', { user: 'admin', text: `${user.name} a rejoins la room!`});
            
            socket.join(user.room);
            const users = getUsersInRoom(user.room);
            socket.broadcast.to(user.room).emit('listUsers', { users });
            socket.emit('listUsers', { users });
            
            callback();
    });

    socket.on("sendMessage", (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('newMessage', { user: user.name, text: message.text });
        
        callback();
    })

    socket.on("disconnect", () => {
        let tmp_name = getUser(socket.id);
        if(tmp_name){
            let tmp_room = tmp_name.room;
            tmp_name = tmp_name.name;
            socket.broadcast.to(tmp_room).emit('newMessage', { user:'admin', text:`${tmp_name} a quitter le chat 😞`});

        }
        const user = removeUser(socket.id);
        if(user.room)
        {
            const users = getUsersInRoom(user.room);
            socket.broadcast.to(user.room).emit('listUsers', { users });
        }
        
    })

});

server.listen(8080, () => {
    console.log(`Server has started on port ${PORT}`);
});


