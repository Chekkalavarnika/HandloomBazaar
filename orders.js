window.onload = function () {
    const ordersList = document.getElementById("orders-list");
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  
    if (orders.length === 0) {
      ordersList.innerHTML = "<p>No orders placed yet.</p>";
      return;
    }
  
    orders.forEach(order => {
      const orderDiv = document.createElement("div");
      orderDiv.className = "order-card";
      orderDiv.innerHTML = `
        <img src="${order.image}" alt="${order.name}">
        <div>
          <h4>${order.name}</h4>
          <p>₹${order.price}</p>
          <p>Status: ✅ Delivered</p>
        </div>
      `;
      ordersList.appendChild(orderDiv);
    });
  };
  
  function goHome() {
    window.location.href = "home.html";
  }
  