window.onload = function () {
    const productList = document.getElementById("product-list");
    const products = JSON.parse(localStorage.getItem("weaverProducts") || "[]");
  
    if (products.length === 0) {
      productList.innerHTML = "<p>No products available yet.</p>";
      return;
    }
  
    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p><strong>₹${product.price}</strong></p>
        <p>${product.description}</p>
        <button onclick="addToCart(${product.id})">Buy Now</button>
      `;
      productList.appendChild(card);
    });
  };
  
  function addToCart(productId) {
    const allProducts = JSON.parse(localStorage.getItem("weaverProducts") || "[]");
    const product = allProducts.find((p) => p.id === productId);
  
    if (!product) return;
  
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  
    alert("✅ Product added to cart!");
  }
  
  function viewDetails(productId) {
    const allProducts = JSON.parse(localStorage.getItem("weaverProducts") || "[]");
    const selected = allProducts.find(p => p.id === productId);
    localStorage.setItem("selectedProduct", JSON.stringify(selected));
    window.location.href = "product-details.html";
  }
  
  