import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD-QFUPwBIQahsJ7m14dRyS22Ul4pPZ_hI",
    authDomain: "minip-231d9.firebaseapp.com",
    projectId: "minip-231d9",
    storageBucket: "minip-231d9.firebasestorage.app",
    messagingSenderId: "211049156926",
    appId: "1:211049156926:web:37bbc513def8ee7bf01c6f",
    measurementId: "G-M71M8B6ZJK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);