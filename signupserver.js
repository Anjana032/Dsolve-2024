//const { MongoClient } = require('mongodb');

//const uri = "your_mongodb_uri_here";


/*async function addRecipientDetails(orgName, userId, password, mobileNumber, email, address) {
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
    } catch (error) {
        console.error("Error adding recipient details:", error);
    } finally {
        await client.close();
    }
}

// Example usage:
// addRecipientDetails(orgName, userId, password, mobileNumber, email, address);*/
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

app.use(bodyParser.json());

//const uri = "your_mongodb_uri_here";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const username = encodeURIComponent("meenumegha7222");
const password = encodeURIComponent("Black@Pearl007");
const uri = `mongodb+srv://${username}:${password}@shareaplate.khbdkrt.mongodb.net/?retryWrites=true&w=majority&appName=ShareAPlate`;

const client = new MongoClient(uri);
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
});

