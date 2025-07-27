window.onload = function () {
    const weaverEmail = localStorage.getItem("loggedInWeaverEmail");  // Ensure weaver is logged in
    if (!weaverEmail) {
      alert("Please log in to view orders.");
      window.location.href = "weaver-login.html";
      return;
    }
  
    // Fetch all orders for this weaver
    const allOrders = Object.keys(localStorage).filter(key => key.startsWith('order_'));
    
    const ordersList = document.getElementById("orders-list");
    ordersList.innerHTML = "";  // Clear previous content
  
    allOrders.forEach(orderKey => {
      const order = JSON.parse(localStorage.getItem(orderKey));
  
      if (order.weaverEmail === weaverEmail) {
        const orderDiv = document.createElement("div");
        orderDiv.className = "order-item";
  
        orderDiv.innerHTML = `
          <p><strong>Order ID:</strong> ${order.orderId}</p>
          <p><strong>Buyer Name:</strong> ${order.buyerName}</p>
          <p><strong>Product:</strong> ${order.productName}</p>
          <p><strong>Price:</strong> ₹${order.productPrice}</p>
          <p><strong>Order Date:</strong> ${new Date(order.orderDate).toLocaleString()}</p>
          <p><strong>Status:</strong> ${order.status}</p>
          <button onclick="markAsShipped('${order.orderId}')">Mark as Shipped</button>
        `;
  
        ordersList.appendChild(orderDiv);
      }
    });
  };
  
  function markAsShipped(orderId) {
    const order = JSON.parse(localStorage.getItem(orderId));
    if (order) {
      order.status = "Shipped";  // Change order status to "Shipped"
      localStorage.setItem(orderId, JSON.stringify(order));  // Update order status
  
      alert("✅ Order marked as shipped!");
      location.reload();  // Refresh the page to show updated status
    }
  }
  