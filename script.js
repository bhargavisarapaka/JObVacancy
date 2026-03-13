 function toggleMode() {

    document.body.classList.toggle("dark-mode");

    let btn = document.getElementById("modeBtn");

    if (document.body.classList.contains("dark-mode")) {
        btn.innerText = "Light Mode";
    } 
    else 
        {
        btn.innerText = "Dark Mode";
        }
}
function registerUser() {
    let name = document.querySelector('#register input[placeholder="Full Name"]').value;
    let email = document.querySelector('#register input[placeholder="Email"]').value;
    let password = document.querySelector('#register input[placeholder="Password"]').value;

    if (name === "" || email === "" || password === "") 
        {
        alert("Please fill all fields");
    }
     else 
        {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        alert("Registration Successful!");
    }
}
function loginUser() 
{
    let email = document.querySelector('#login input[type="email"]').value;
    let password = document.querySelector('#login input[type="password"]').value;

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) 
        {
        alert("Login Successful!");
    } 
    else 
        {
        alert("Invalid Email or Password");
    }
}

function sendMessage() {
    let name = document.querySelector('#contact input[placeholder="Your Name"]').value;
    let email = document.querySelector('#contact input[placeholder="Your Email"]').value;
    let message = document.querySelector('#contact textarea').value;

    if (name === "" || email === "" || message === "")
         {
        alert("Please fill all fields");
    }
     else
         {
        alert("Message Sent Successfully!");
    }
}