const { MongoClient } = require('mongodb');

//const uri = "your_mongodb_uri_here";
const username = encodeURIComponent("meenumegha7222");
const password = encodeURIComponent("Black@Pearl007");
const uri = `mongodb+srv://${username}:${password}@shareaplate.khbdkrt.mongodb.net/?retryWrites=true&w=majority&appName=ShareAPlate`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function addRecipientDetails(orgName, userId, password, mobileNumber, email, address) {
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
// addRecipientDetails(orgName, userId, password, mobileNumber, email, address);
