document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (username === "admin" && password === "1234") {
        alert("Login successful!");
        errorMessage.style.display = "none";
    } else {
        errorMessage.textContent = "Invalid username or password!";
        errorMessage.style.display = "block";
    }
});
