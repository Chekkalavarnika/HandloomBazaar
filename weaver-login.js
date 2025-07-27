function loginWeaver(event) {
    event.preventDefault();
  
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;
  
    const weavers = JSON.parse(localStorage.getItem("weavers") || "[]");
  
    const matchedWeaver = weavers.find(w => w.email === email && w.password === password);
  
    if (matchedWeaver) {
      localStorage.setItem("loggedInWeaver", JSON.stringify(matchedWeaver));
      alert("🎉 Login successful!");
      window.location.href = "weaver-dashboard.html";
    } else {
      alert("❌ Invalid credentials!");
    }
  }
  
  function loginWeaver(event) {
    event.preventDefault();
  
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();
  
    const weavers = JSON.parse(localStorage.getItem("weavers")) || [];
  
    const matchedWeaver = weavers.find(
      weaver => weaver.email === email && weaver.password === password
    );
  
    if (matchedWeaver) {
      // ✅ Save logged-in weaver info
      localStorage.setItem("loggedInWeaverEmail", matchedWeaver.email);
      localStorage.setItem("loggedInWeaverName", matchedWeaver.name); // optional
  
      alert("Login successful!");
      window.location.href = "weaver-dashboard.html";
    } else {
      alert("Invalid email or password.");
    }
  }
  