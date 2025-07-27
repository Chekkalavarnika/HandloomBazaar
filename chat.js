window.onload = function () {
  const weaverEmail = localStorage.getItem("chatWeaverEmail");
  const productId = localStorage.getItem("chatProductId");

  if (!weaverEmail || !productId) {
    alert("❌ Chat data missing.");
    window.location.href = "index.html";
    return;
  }

  const chatKey = `chat_${weaverEmail}_${productId}`;
  const chatHistory = JSON.parse(localStorage.getItem(chatKey)) || [];

  displayChat(chatHistory);
};

function displayChat(messages) {
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = "";

  messages.forEach(msg => {
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${msg.sender}`;
    msgDiv.textContent = `${msg.sender === "buyer" ? "You" : "Weaver"}: ${msg.text}`;
    chatBox.appendChild(msgDiv);
  });

  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendChatMessage() {
  const input = document.getElementById("chat-input");
  const messageText = input.value.trim();
  if (!messageText) return;

  const weaverEmail = localStorage.getItem("chatWeaverEmail");
  const productId = localStorage.getItem("chatProductId");
  const chatKey = `chat_${weaverEmail}_${productId}`;

  const newMsg = {
    sender: "buyer",
    text: messageText,
    timestamp: new Date().toISOString()
  };

  let chatHistory = JSON.parse(localStorage.getItem(chatKey)) || [];
  chatHistory.push(newMsg);
  localStorage.setItem(chatKey, JSON.stringify(chatHistory));

  input.value = "";
  displayChat(chatHistory);
}

function goBack() {
  window.history.back();
}
