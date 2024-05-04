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
    var password = document.getElementById("password").value;
  
    // You can replace the condition with your actual authentication logic
    if (username === "johnrenticruz@gmail.com" && password === "password") {
      // Redirect to dashboard or any other page
      window.location.href = "Home.html";
    } else {
      document.getElementById("error").innerText = "Invalid username or password";
      document.getElementById("error").style.display = "block";
    }
  });
  
  // for register or Sign Up
  document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // You can replace this with your actual sign-up logic
    if (name && email && password) {
      alert("Sign up successful!");
      // Redirect to dashboard or any other page
      window.location.href = "verify.html";
    } else {
      document.getElementById("error").innerText = "Please fill in all fields";
      document.getElementById("error").style.display = "block";
    }
  });
  

  document.querySelectorAll(".social-icons").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var provider = this.innerText.toLowerCase();
      alert("Continue with " + provider);
      // Implement social media login logic here
    });
  });
 
