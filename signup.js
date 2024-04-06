/*document.addEventListener("DOMContentLoaded", function() {
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
/*
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const uri = "your_mongodb_uri_here";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Define the POST endpoint for signup
app.post('/signup', async (req, res) => {
    const { orgName, userId, password, mobileNumber, email, address } = req.body;

    try {
        await client.connect();
        const database = client.db("My-database");
        const recipientDetailsCollection = database.collection("RecipientDetails");

        // Insert new recipient details into collection
        await recipientDetailsCollection.insertOne({
            organisationName: orgName,
            userid: userId,
            password: password,
            phoneNumber: mobileNumber,
            email: email,
            address: address
        });

        console.log("Recipient details added successfully.");

        // Send success response to frontend
        res.status(200).send("Signup successful");
    } catch (error) {
        console.error("Error adding recipient details:", error);
        // Send error response to frontend
        res.status(500).send("An error occurred while signing up");
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signupButton").addEventListener("click", function() {
        var orgName = document.getElementById("orgName").value;
        var userId = document.getElementById("userId").value;
        var password = document.getElementById("password").value;
        var mobileNumber = document.getElementById("mobileNumber").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;

        // Send signup request to backend
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orgName: orgName,
                userId: userId,
                password: password,
                mobileNumber: mobileNumber,
                email: email,
                address: address
            })
        })
        .then(response => {
            if (response.ok) {
                // Redirect to login page or display success message
                alert("Signup successful");
            } else {
                // Display error message if signup fails
                alert("Signup failed. Please try again later.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("An error occurred. Please try again later.");
        });
    });
});
