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

        // Send login request to backend
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: userId, password: password })
        })
        .then(response => {
            if (response.ok) {
                // Redirect to recipient dashboard on successful login
                window.location.href = "/recipient-dashboard.html";
            } else {
                // Display error message if login is invalid
                alert("Invalid login. Please check your user ID and password.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("An error occurred. Please try again later.");
        });
    });
});
