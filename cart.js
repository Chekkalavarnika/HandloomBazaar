// Display the cart items on the cart page
window.onload = function() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsDiv = document.getElementById("cart-items");
  
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="100" />
      <p>${item.name}</p>
      <p>Price: ₹${item.price}</p>
      <button onclick="removeFromCart('${item.id}')">Remove</button>
    `;

    cartItemsDiv.appendChild(itemDiv);
  });
};

// Remove item from the cart
function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.reload();  // Reload the page to reflect the changes
}

// Proceed to checkout
function checkout() {
  window.location.href = "checkout.html";  // Redirect to checkout page
}
