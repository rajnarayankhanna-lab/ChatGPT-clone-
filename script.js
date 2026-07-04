alert("AI only understands English & only give answer of some questions");

function sendMessage() {

  // tumhara send message code

}

function toggleMenu() {

  let menu = document.getElementById("plus-menu");

  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }

}

function sendMessage() {

  let msg = document.getElementById("message").value;

  // user bubble

  let bubble = document.createElement("div");
  bubble.innerText = msg;

  bubble.classList.add("user-message");

  document.getElementById("chat-area").appendChild(bubble);

  // fake replies

  let reply = "I can't understand 😅";

  if(msg.toLowerCase() === "hello"){
    reply = "Hello 👋";
  }

  else if(msg.toLowerCase() === "hi"){
    reply = "Hi there 😄";
  }
  
  else if(msg.toLowerCase() === "who made you?"){
  reply = "I'm a clone of ChatGPT and I was made by AIdesk ";
}

  else if(msg.toLowerCase() ==="who are you") {
    reply = "I am ChatGPT 🤖";
  }
  
  else if(msg.toLowerCase() ==="how are you") {
    reply = "I'm fine, What about you?";
  }
  
  let aiBubble = document.createElement("div");

  aiBubble.innerText = reply;

  aiBubble.classList.add("ai-message");

  document.getElementById("chat-area").appendChild(aiBubble);

  document.getElementById("message").value = "";

}
