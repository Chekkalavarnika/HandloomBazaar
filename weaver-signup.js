document.getElementById("weaverSignupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const weaver = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      experience: document.getElementById("experience").value,
      speciality: document.getElementById("speciality").value,
      location: document.getElementById("location").value,
      password: document.getElementById("password").value
    };
  
    let weavers = JSON.parse(localStorage.getItem("weavers") || "[]");
  
    // Check if email already exists
    if (weavers.some(w => w.email === weaver.email)) {
      alert("❗ This email is already registered!");
      return;
    }
  
    weavers.push(weaver);
    localStorage.setItem("weavers", JSON.stringify(weavers));
    alert("✅ Registration Successful!");
    window.location.href = "weaver-login.html";
  });
  