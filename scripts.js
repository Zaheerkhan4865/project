
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBIpQBlpnZSBopb1xuhLnJyNDJxg55uMHk",
  authDomain: "authentication-b908f.firebaseapp.com",
  projectId: "authentication-b908f",
  storageBucket: "authentication-b908f.appspot.com",
  messagingSenderId: "259532587425",
  appId: "1:259532587425:web:cccedb3328b15a72f28be0",
  measurementId: "G-ZY0D6DH6LS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const authButton = document.getElementById("auth-button");
const toggleForm = document.getElementById("toggle-form");
const message = document.getElementById("message");

let isLogin = true; 

toggleForm.addEventListener("click", () => {
    isLogin = !isLogin;
    document.getElementById("form-title").innerText = isLogin ? "Sign In" : "Sign Up";
    authButton.innerText = isLogin ? "Sign In" : "Sign Up";
    toggleForm.innerHTML = isLogin 
        ? "Don't have an account? <span>Sign Up</span>" 
        : "Already have an account? <span>Sign In</span>";
});

authButton.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    
    if (isLogin) {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                message.style.color = "green";
                message.innerText = "Sign in successful!";
                setTimeout(() => window.location.href = "dashboard.html", 1000);
            })
            .catch(error => {
                message.style.color = "red";
                message.innerText = error.message;
            });
    } else {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                message.style.color = "green";
                message.innerText = "Account created successfully!";
            })
            .catch(error => {
                message.style.color = "red";
                message.innerText = error.message;
            });
    }
});
