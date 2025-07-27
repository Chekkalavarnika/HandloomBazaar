// Load selected product
const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

if (selectedProduct) {
  document.getElementById("product-image").src = selectedProduct.imageUrl;
  document.getElementById("product-name").textContent = selectedProduct.name;
  document.getElementById("product-price").textContent = `Price: ₹${selectedProduct.price}`;
  document.getElementById("product-color").textContent = `Color: ${selectedProduct.color}`;
  document.getElementById("product-description").textContent = selectedProduct.description;

  // Get weaver details
  const weavers = JSON.parse(localStorage.getItem("weavers") || "[]");
  const matchedWeaver = weavers.find(w => w.email === selectedProduct.weaverEmail);

  if (matchedWeaver) {
    document.getElementById("weaver-name").textContent = `Name: ${matchedWeaver.name}`;
    document.getElementById("weaver-phone").textContent = `Phone: ${matchedWeaver.phone}`;
    document.getElementById("weaver-address").textContent = `Address: ${matchedWeaver.address}`;
  } else {
    document.getElementById("weaver-name").textContent = "Weaver not found.";
  }
}

// Action buttons
function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(selectedProduct);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("✅ Added to cart!");
}

function chatWithWeaver() {
  localStorage.setItem("chatWith", selectedProduct.weaverEmail);
  window.location.href = "buyer-chat.html";
}

function placeOrder() {
  localStorage.setItem("checkoutProduct", JSON.stringify(selectedProduct));
  window.location.href = "checkout.html";
}
