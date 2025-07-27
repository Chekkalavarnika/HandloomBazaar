// Display the order details on the checkout page
window.onload = function() {
  const buyerEmail = localStorage.getItem("loggedInBuyerEmail");
  const orders = JSON.parse(localStorage.getItem(`orders_${buyerEmail}`)) || [];
  const orderSummaryDiv = document.getElementById("order-summary");

  if (orders.length === 0) {
    orderSummaryDiv.innerHTML = "<p>No orders found.</p>";
    return;
  }

  const latestOrder = orders[orders.length - 1];

  orderSummaryDiv.innerHTML = `
    <p><strong>Order ID:</strong> ${latestOrder.orderId}</p>
    <p><strong>Order Date:</strong> ${latestOrder.orderDate}</p>
    <p><strong>Status:</strong> ${latestOrder.status}</p>
    <h3>Products:</h3>
    <ul>
      ${latestOrder.products.map(item => `
        <li>${item.name} - ₹${item.price}</li>
      `).join('')}
    </ul>
  `;
};// Clear all LocalStorage data after successful order
