document.addEventListener("DOMContentLoaded", loadMessages);

function addMessage() {
  const name = document.getElementById("nameInput").value || "Anonymous";
  const message = document.getElementById("messageInput").value;

  if (message.trim() === "") return;

  const newMessage = {
    id: Date.now(),
    name: name,
    text: message,
    reply: ""
  };

  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.push(newMessage);
  localStorage.setItem("messages", JSON.stringify(messages));

  document.getElementById("messageInput").value = "";
  loadMessages();
}

function loadMessages() {
  const container = document.getElementById("messagesContainer");
  container.innerHTML = "";

  let messages = JSON.parse(localStorage.getItem("messages")) || [];

  messages.forEach(msg => {
    const div = document.createElement("div");
    div.classList.add("message");

    div.innerHTML = `
      <strong>${msg.name}</strong>
      <p>${msg.text}</p>
      ${msg.reply ? `<div class="reply"><strong>You:</strong> ${msg.reply}</div>` : ""}
    `;

    container.appendChild(div);
  });
}

/* 
  🔐 HOW YOU REPLY (TEMP METHOD)
  Open browser console and run:

  replyToMessage(messageID, "Your reply text")

*/

function replyToMessage(id, replyText) {
  let messages = JSON.parse(localStorage.getItem("messages")) || [];

  messages = messages.map(msg => {
    if (msg.id === id) {
      msg.reply = replyText;
    }
    return msg;
  });

  localStorage.setItem("messages", JSON.stringify(messages));
  loadMessages();
}
