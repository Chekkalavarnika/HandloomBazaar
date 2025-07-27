window.onload = function () {
  renderAllProducts();
  updatePriceLabel();
};

// Global variable to store fetched products
let allProducts = [];

function renderAllProducts() {
  const productList = document.getElementById("product-list");
  allProducts = JSON.parse(localStorage.getItem("products")) || [];

  if (allProducts.length === 0) {
    productList.innerHTML = "<p>No products available yet.</p>";
    return;
  }

  productList.innerHTML = "";
  allProducts.forEach(product => {
    productList.appendChild(createProductCard(product));
  });
}

// Create HTML for a product card
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>Price: ₹${product.price}</p>
    <p>Category: ${product.category}</p>
    <button onclick='viewProductDetails(${JSON.stringify(product)})'>View Details</button>
  `;
  return card;
}

// Filter by category
function filterProducts(category) {
  const productList = document.getElementById("product-list");
  const maxPrice = document.getElementById("price-range").value;

  const filtered = allProducts.filter(product => {
    const matchesCategory = category === "All" || product.category === category;
    const withinPrice = parseInt(product.price) <= parseInt(maxPrice);
    return matchesCategory && withinPrice;
  });

  productList.innerHTML = "";
  if (filtered.length === 0) {
    productList.innerHTML = "<p>No products match the selected filters.</p>";
    return;
  }

  filtered.forEach(product => {
    productList.appendChild(createProductCard(product));
  });
}

// Search by name
function searchProducts() {
  const searchText = document.getElementById("search-input").value.toLowerCase();
  const maxPrice = document.getElementById("price-range").value;

  const filtered = allProducts.filter(product => {
    const matchesName = product.name.toLowerCase().includes(searchText);
    const withinPrice = parseInt(product.price) <= parseInt(maxPrice);
    return matchesName && withinPrice;
  });

  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  if (filtered.length === 0) {
    productList.innerHTML = "<p>No matching products found.</p>";
    return;
  }

  filtered.forEach(product => {
    productList.appendChild(createProductCard(product));
  });
}

// Price range filter
function updatePriceLabel() {
  const priceValue = document.getElementById("price-range").value;
  document.getElementById("price-label").textContent = priceValue;
  applyFilters();
}

function applyFilters() {
  const searchText = document.getElementById("search-input").value.toLowerCase();
  const maxPrice = parseInt(document.getElementById("price-range").value);

  const filtered = allProducts.filter(product => {
    const matchesName = product.name.toLowerCase().includes(searchText);
    const withinPrice = parseInt(product.price) <= maxPrice;
    return matchesName && withinPrice;
  });

  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  if (filtered.length === 0) {
    productList.innerHTML = "<p>No products found under selected price range.</p>";
    return;
  }

  filtered.forEach(product => {
    productList.appendChild(createProductCard(product));
  });
}

// Optional: Open chat with weaver (if implemented)
function openChat() {
  alert("Chat with weaver feature is coming soon!");
}

// Optional: View product details (can be expanded later)
function viewProductDetails(product) {
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product-details.html";
}

