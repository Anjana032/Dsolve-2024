const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

app.use(bodyParser.json());

//const uri = "your_mongodb_uri_here";
const username = encodeURIComponent("meenumegha7222");
const password = encodeURIComponent("Black@Pearl007");
const uri = "mongodb+srv://${username}:${password}@shareaplate.khbdkrt.mongodb.net/?retryWrites=true&w=majority&appName=ShareAPlate";

const client = new MongoClient(uri);

app.post('/login', async (req, res) => {
    const { userId, password } = req.body;

    try {
        await client.connect();
        const database = client.db("My-database");
        const recipientDetailsCollection = database.collection("RecipientDetails");

        // Find recipient with provided userId and password
        const recipient = await recipientDetailsCollection.findOne({ userid: userId, password: password });

        if (recipient) {
            // Valid login, send success response
            res.sendStatus(200);
        } else {
            // Invalid login, send error response
            res.sendStatus(401);
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("An error occurred. Please try again later.");
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
