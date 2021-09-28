const express = require("express");
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
// const { isPromise } = require("util/types");
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

app.use(express.static('public'))

app.get('/', (req, res) => {
    // res.send('Hello World!')
    return "index.html"
  })

let participants = [];
io.on("connection", (socket) => {
    console.log("user connected",socket.id);
    socket.on("joinChat",(name)=>{
        let partiObj = {
            socketId : socket.id,
            name
        }
        participants.push(partiObj);

         //update participants list
        socket.emit("all-participants",participants);
        socket.broadcast.emit("all-participants",participants);

        // console.log("allparti",participants);
        socket.broadcast.emit("joined",`${name} has joined the chat ||`)
        socket.on("my-message",(myMessage)=>{
            socket.broadcast.emit("gotMessage",{name,myMessage})
        })

        socket.on("disconnect", () => {
            let selectedParticipant = participants.filter((obj)=>obj.name==name);
            socket.broadcast.emit("user-disconnect",`${selectedParticipant[0].name} has left the chat !!`);
            // console.log(selectedParticipant);
            // console.log("userName",selectedParticipant.userName);
            participants = participants.filter((obj)=>obj.name!=name);
            console.log("disconnect",participants);
            //update participants list
            socket.emit("all-participants",participants);
            socket.broadcast.emit("all-participants",participants);
        });
    })

    

});

let PORT = process.env.PORT || 8787;

httpServer.listen(PORT,()=>{
    console.log("app stared");
});