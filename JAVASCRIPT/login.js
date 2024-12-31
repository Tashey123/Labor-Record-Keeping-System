document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (username === "admin" && password === "123") {
        alert("Login successful!");
        errorMessage.style.display = "none"; // Hide the error message
        window.location.href = 'home_page.html'; // Redirect only on successful login
    } else {
        errorMessage.textContent = "Invalid username or password!"; // Show error message
        errorMessage.style.display = "block"; // Make the error message visible
    }
});
