window.onload = function () {
    const orderHistoryContainer = document.getElementById("order-history");
  
    const orders = JSON.parse(localStorage.getItem("orderHistory") || "[]");
  
    if (orders.length === 0) {
      orderHistoryContainer.innerHTML = "<p>You haven’t placed any orders yet 🧺</p>";
      return;
    }
  
    orders.forEach((product, index) => {
      const card = document.createElement("div");
      card.className = "order-card";
      card.innerHTML = `
        <h3>Order #${index + 1}</h3>
        <p><strong>Product:</strong> ${product.name}</p>
        <p><strong>Price:</strong> ₹${product.price}</p>
        <p><strong>Description:</strong> ${product.description}</p>
        <p><strong>Ordered On:</strong> ${product.date}</p>
      `;
      orderHistoryContainer.appendChild(card);
    });
  };
  