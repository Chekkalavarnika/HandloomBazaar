document.getElementById("buyer-login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("buyer-email").value.trim();
  const password = document.getElementById("buyer-password").value;

  const buyers = JSON.parse(localStorage.getItem("buyers") || "[]");

  const matchedBuyer = buyers.find(buyer => buyer.email === email && buyer.password === password);

  if (matchedBuyer) {
    alert("✅ Login successful! Welcome to Handloom Bazaar.");
    localStorage.setItem("loggedInBuyerEmail", email);
  localStorage.setItem("loggedInBuyerName", name);
    // Save full buyer object (optional)
    localStorage.setItem("loggedInBuyer", JSON.stringify(matchedBuyer));
    
    // ✅ Save only the email separately for addToCart and other features
    localStorage.setItem("loggedInBuyerEmail", matchedBuyer.email);
    
    window.location.href = "buyer-home.html"; // Redirect to buyer homepage
  } else {
    alert("❌ Incorrect email or password. Please try again.");
  }
});
