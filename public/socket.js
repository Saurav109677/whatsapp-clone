socket.on("joined",(msg)=>{
    // <div class="chat join-chat"></div>

    let joinDiv = document.createElement("div");
    joinDiv.classList.add("chat");
    joinDiv.classList.add("join-chat");
    joinDiv.innerHTML = msg;

    chatBox.append(joinDiv);
    // console.log("msg",msg);
})

socket.on("gotMessage",({name,myMessage})=>{
    let chatDiv = document.createElement("div");
        chatDiv.classList.add("chat");
        chatDiv.classList.add("left");

        let chatNameDiv = document.createElement("div");
        chatNameDiv.classList.add("chat-name");
        chatNameDiv.innerHTML = name;
        
        let chatText = document.createElement("div");
        chatText.classList.add("chat-message");
        chatText.innerHTML = myMessage;

        chatDiv.appendChild(chatNameDiv);
        chatDiv.appendChild(chatText);
        
        chatBox.append(chatDiv);
        chatBox.scrollTop = chatBox.scrollHeight;

})

socket.on("user-disconnect",(msg)=>{
    // <div class="chat leave-chat"></div>
    let joinDiv = document.createElement("div");
    joinDiv.classList.add("chat");
    joinDiv.classList.add("leave-chat");
    joinDiv.innerHTML = msg;

    chatBox.append(joinDiv);
})