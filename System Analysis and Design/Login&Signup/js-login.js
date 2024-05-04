const container = document.getElementById('container');
const registerBtn = document.
getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', ()=>{
    container.classList.add("active");
})

loginBtn.addEventListener('click', ()=>{
    container.classList.remove("active");
})

// for Log in JS
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
  
    // You can replace the condition with your actual authentication logic
    if (username === "admin@gmail.com" && password === "1234") {
      // Redirect to dashboard or any other page
      window.location.href = "Home.html";
    } else {
      document.getElementById("error").innerText = "Invalid username or password";
      document.getElementById("error").style.display = "block";
    }
  });
  

