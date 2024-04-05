document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for form submission
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form input values
        var orgName = document.getElementById("org-name").value;
        var userId = document.getElementById("user-id").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm-password").value;
        var mobileNumber = document.getElementById("mobile-number").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        
        // Validate password and confirm password
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return; // Stop further execution
        }
        
        // Validate other form fields if needed
        
        // Send form data to server for processing
        sendDataToServer(orgName, userId, password, mobileNumber, email, address);
    });
});

// Function to send form data to server for processing
function sendDataToServer(orgName, userId, password, mobileNumber, email, address) {
    // You would typically use AJAX or fetch to send data to your server
    // For simplicity, I'm just console logging here
    console.log("Sending data to server for processing:", orgName, userId, password, mobileNumber, email, address);
}
