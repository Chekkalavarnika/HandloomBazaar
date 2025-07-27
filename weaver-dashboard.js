// -----------------------------
// 🧾 Load Orders for This Weaver
// -----------------------------
function loadWeaverOrders() {
  const weaverId = localStorage.getItem("weaverId") || "weaver321";
  const orderList = document.getElementById("order-list");

  // Simulate order data (you can store this in localStorage or use a mock object)
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  // Filter orders for this weaver
  const weaverOrders = orders.filter(order => order.weaverId === weaverId);

  orderList.innerHTML = "";
  weaverOrders.forEach(order => {
    const li = document.createElement("li");
    li.textContent = `${order.productName} - Status: ${order.status}`;
    orderList.appendChild(li);
  });
}

// --------------------------
// 🧵 Add New Product
// --------------------------
async function addProduct() {
  const category = document.getElementById("product-category").value;
  const name = document.getElementById("product-name").value;
  const price = document.getElementById("product-price").value;
  const description = document.getElementById("product-description").value;
  const imageInput = document.getElementById("product-image");

  if (!category || !name || !price || !description || imageInput.files.length === 0) {
    alert("Please fill all fields.");
    return;
  }

  const imageUrl = URL.createObjectURL(imageInput.files[0]); // Temp for preview only

  // Save product data in localStorage
  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.push({
    weaverId: localStorage.getItem("weaverId"),
    category,
    name,
    price,
    description,
    imageUrl,
    createdAt: new Date().toISOString()
  });

  localStorage.setItem("products", JSON.stringify(products));

  alert("Product added!");
  loadProducts(); // Refresh list
}

// --------------------------
// 📦 Load Products
// --------------------------
async function loadProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  const products = JSON.parse(localStorage.getItem("products")) || [];
  const weaverProducts = products.filter(product => product.weaverId === localStorage.getItem("weaverId"));

  weaverProducts.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <h4>${product.name}</h4>
      <p>₹${product.price}</p>
      <p>${product.category}</p>
      <p>${product.description}</p>
      <img src="${product.imageUrl}" width="100" />
      <button onclick="editProduct('${product.name}', ${product.price}, '${product.description}')">Edit</button>
      <button onclick="deleteProduct('${product.name}')">Delete</button>
    `;
    productList.appendChild(div);
  });
}

// --------------------------
// ✏️ Edit Product
// --------------------------
function editProduct(name, price, description) {
  document.getElementById("edit-name").value = name;
  document.getElementById("edit-price").value = price;
  document.getElementById("edit-description").value = description;
  document.getElementById("edit-modal").style.display = "block";
}

// Save changes to the product list
function saveEdit() {
  const name = document.getElementById("edit-name").value;
  const price = document.getElementById("edit-price").value;
  const description = document.getElementById("edit-description").value;

  let products = JSON.parse(localStorage.getItem("products")) || [];
  const productIndex = products.findIndex(product => product.name === name);

  if (productIndex !== -1) {
    products[productIndex].price = price;
    products[productIndex].description = description;
    localStorage.setItem("products", JSON.stringify(products));
  }

  document.getElementById("edit-modal").style.display = "none";
  loadProducts();
}

// Close edit modal without saving
function closeModal() {
  document.getElementById("edit-modal").style.display = "none";
}

// --------------------------
// ❌ Delete Product
// --------------------------
function deleteProduct(name) {
  if (confirm("Are you sure you want to delete this product?")) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products = products.filter(product => product.name !== name);
    localStorage.setItem("products", JSON.stringify(products));
    loadProducts();
  }
}

// --------------------------
// 🔐 Logout
// --------------------------
function logout() {
  localStorage.removeItem("weaverId");
  window.location.href = "weaver-login.html";
}

// --------------------------
// 🚀 On Load
// --------------------------
window.onload = () => {
  loadProducts();
  loadWeaverOrders();
};

// --------------------------
// 🧠 Export for global use
// --------------------------
window.addProduct = addProduct;
window.editProduct = editProduct;
window.saveEdit = saveEdit;
window.closeModal = closeModal;
window.deleteProduct = deleteProduct;
window.logout = logout;
