// login-francine.js
// ==========================
// Advanced Login JS
// ==========================

// Grab form and input elements
const form = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Create elements for error messages
const usernameError = document.createElement("div");
const passwordError = document.createElement("div");

usernameError.style.color = "red";
usernameError.style.fontSize = "12px";
usernameInput.parentNode.insertBefore(usernameError, usernameInput.nextSibling);

passwordError.style.color = "red";
passwordError.style.fontSize = "12px";
passwordInput.parentNode.insertBefore(passwordError, passwordInput.nextSibling);

// Optional: show/hide password
const togglePassword = document.createElement("span");
togglePassword.textContent = "👁️";
togglePassword.style.cursor = "pointer";
togglePassword.style.marginLeft = "5px";
passwordInput.parentNode.insertBefore(togglePassword, passwordInput.nextSibling);

togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.textContent = "🙈";
  } else {
    passwordInput.type = "password";
    togglePassword.textContent = "👁️";
  }
});

// Optional: "remember me" checkbox
const rememberContainer = document.createElement("div");
rememberContainer.style.marginTop = "10px";

const rememberCheckbox = document.createElement("input");
rememberCheckbox.type = "checkbox";
rememberCheckbox.id = "remember";
const rememberLabel = document.createElement("label");
rememberLabel.htmlFor = "remember";
rememberLabel.textContent = "Remember me";

rememberContainer.appendChild(rememberCheckbox);
rememberContainer.appendChild(rememberLabel);
form.insertBefore(rememberContainer, form.querySelector("button"));

// Track login attempts
let attempts = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission

  // Reset error messages
  usernameError.textContent = "";
  passwordError.textContent = "";

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  let valid = true;

  // Validate username
  if (username.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters.";
    valid = false;
  }

  // Validate password
  if (password.length < 4) {
    passwordError.textContent = "Password must be at least 4 characters.";
    valid = false;
  }

  // Log attempts
  attempts++;
  console.log(`Login attempt #${attempts} - Username: ${username}`);

  if (!valid) return;

  // Example authentication
  if (username === "admin" && password === "1234") {
    if (rememberCheckbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("remember", true);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("remember");
    }

    alert("Login successful! Redirecting to dashboard...");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password!");
  }
});

// Optional: autofill from localStorage
window.addEventListener("load", () => {
  if (localStorage.getItem("remember") === "true") {
    usernameInput.value = localStorage.getItem("username");
    rememberCheckbox.checked = true;
  }
});
