let selectedChatKey = null;

window.onload = function () {
  const weaverEmail = localStorage.getItem("loggedInWeaverEmail"); // you should set this after login
  if (!weaverEmail) {
    alert("Please log in as a weaver.");
    window.location.href = "weaver-login.html";
    return;
  }

  loadAvailableChats(weaverEmail);
};

function loadAvailableChats(weaverEmail) {
  const selector = document.getElementById("chat-selector");

  for (let key in localStorage) {
    if (key.startsWith("chat_") && key.includes(weaverEmail)) {
      const parts = key.split("_"); // ["chat", "weaverEmail", "productId"]
      const productId = parts[2];
      const chatData = JSON.parse(localStorage.getItem(key));

      // Try to extract buyer's first message to guess their email
      const firstBuyerMsg = chatData.find(msg => msg.sender === "buyer");
      const buyerIdentifier = firstBuyerMsg ? firstBuyerMsg.text.slice(0, 20) + "..." : "Unknown Buyer";

      const option = document.createElement("option");
      option.value = key;
      option.textContent = `Product ${productId} - ${buyerIdentifier}`;
      selector.appendChild(option);
    }
  }
}

function loadSelectedChat() {
  selectedChatKey = document.getElementById("chat-selector").value;
  if (!selectedChatKey) return;

  const messages = JSON.parse(localStorage.getItem(selectedChatKey)) || [];
  displayChat(messages);
}

function displayChat(messages) {
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = "";

  messages.forEach(msg => {
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${msg.sender}`;
    msgDiv.textContent = `${msg.sender === "weaver" ? "You" : "Buyer"}: ${msg.text}`;
    chatBox.appendChild(msgDiv);
  });

  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendReply() {
  const input = document.getElementById("chat-input");
  const replyText = input.value.trim();
  if (!replyText || !selectedChatKey) return;

  const newMsg = {
    sender: "weaver",
    text: replyText,
    timestamp: new Date().toISOString()
  };

  let messages = JSON.parse(localStorage.getItem(selectedChatKey)) || [];
  messages.push(newMsg);
  localStorage.setItem(selectedChatKey, JSON.stringify(messages));

  input.value = "";
  displayChat(messages);
}
