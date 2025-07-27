document.getElementById("buyer-register-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const profession = document.getElementById("profession").value.trim();

  let buyers = JSON.parse(localStorage.getItem("buyers") || "[]");

  // Check for existing email
  if (buyers.some(buyer => buyer.email === email)) {
    alert("❌ Email already registered. Please login or use a different email.");
    return;
  }

  const newBuyer = {
    name,
    email,
    password,
    phone,
    address,
    profession
  };

  buyers.push(newBuyer);
  localStorage.setItem("buyers", JSON.stringify(buyers));

  // Store current user info for profile or session
  localStorage.setItem("loggedInUser", JSON.stringify(newBuyer));

  alert("✅ Registration successful! You can now login.");
  window.location.href = "buyer-login.html";
});
