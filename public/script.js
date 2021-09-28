
let sendButton = document.querySelector("#send-button")
let rightBox = document.querySelector(".right")
let sendText = document.querySelector("#send-text")
let chatBox = document.querySelector(".chat-box")
// let fun = document.querySelector("#fun")
let joinButton = document.querySelector(".join-button")
let userNameInput = document.querySelector("#input-name");
let chatContainer = document.querySelector(".chat-container")
let sendMessageBox = document.querySelector(".send-message-box")
let userNameDiv = document.querySelector(".user-name")
let joinChat = document.querySelector(".join-chat")

{/* <div class="chat right">
    <div class="chat-name">Steve</div>
    <div class="chat-message"> hi there</div>
</div> */}

let userName;

sendButton.addEventListener("click",function(){
    //create a new my-message
    if(sendText.value!=""){
        let chatDiv = document.createElement("div");
        chatDiv.classList.add("chat");
        chatDiv.classList.add("right");

        let chatNameDiv = document.createElement("div");
        chatNameDiv.classList.add("chat-name");
        chatNameDiv.innerHTML = userName;
        
        let chatText = document.createElement("div");
        chatText.classList.add("chat-message");
        chatText.innerHTML = sendText.value;

        chatDiv.appendChild(chatNameDiv);
        chatDiv.appendChild(chatText);
        
        chatBox.append(chatDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
        sendText.value="";
        socket.emit("my-message",sendText.value);
    }
    
})

// fun.addEventListener("click",function(){
//     //create a new my-message
//     let chatDiv = document.createElement("div");
//     chatDiv.classList.add("chat");
//     chatDiv.classList.add("left");

//     let chatNameDiv = document.createElement("div");
//     chatNameDiv.classList.add("chat-name");
//     chatNameDiv.innerHTML = "Louis";
    
//     let chatText = document.createElement("div");
//     chatText.classList.add("chat-message");
//     chatText.innerHTML = sendText.value;

//     chatDiv.appendChild(chatNameDiv);
//     chatDiv.appendChild(chatText);
    
//     chatBox.append(chatDiv);
//     chatBox.scrollTop = chatBox.scrollHeight;
// })


joinButton.addEventListener("click",function(){
  
    userName = userNameInput.value;
      console.log(userName);
    if(userName){
        socket.emit("joinChat",userName);

        chatBox.classList.remove("hide");
        sendMessageBox.classList.remove("hide");
        userNameDiv.classList.add("hide");
        userNameInput.value="";
    }
})