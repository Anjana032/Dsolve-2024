document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("showPassword").addEventListener("click", function() {
        var passwordField = document.getElementById("password");
        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    });

    document.getElementById("loginButton").addEventListener("click", function() {
        var userId = document.getElementById("userid").value;
        var password = document.getElementById("password").value;

        // Check if user ID and password are correct
        if (userId === "8234523" && password === "cet@canteen") {
            // Redirect to the next page on successful login
            window.location.href = "donor2.html";
        } else {
            // Display error message if user ID or password is incorrect
            alert("Invalid donor. Please check your user ID and password.");
        }
    });
});
