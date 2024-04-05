const { MongoClient } = require('mongodb');

//const uri = "your_mongodb_uri_here";
const username = encodeURIComponent("meenumegha7222");
const password = encodeURIComponent("Black@Pearl007");
const uri = `mongodb+srv://${username}:${password}@shareaplate.khbdkrt.mongodb.net/?retryWrites=true&w=majority&appName=ShareAPlate`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function createCollections() {
  try {
    await client.connect();
    const database = client.db("My-database");

    // Create RecipientDetails collection with schema
    await database.createCollection("RecipientDetails", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["userid", "organisationName", "password", "phoneNumber", "email", "address"],
          properties: {
            userid: { bsonType: "int", description: "must be an integer and is required" },
            organisationName: { bsonType: "string", description: "must be a string and is required" },
            password: { bsonType: "string", description: "must be a string and is required" },
            phoneNumber: { bsonType: "long", description: "must be a long integer and is required" },
            email: { bsonType: "string", description: "must be a string and is required" },
            address: { bsonType: "string", description: "must be a string and is required" }
          }
        }
      }
    });

    // Create Food collection with schema
    await database.createCollection("Food", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["foodName", "quantity"],
          properties: {
            foodName: { bsonType: "string", description: "must be a string and is required" },
            quantity: { bsonType: "int", description: "must be an integer and is required" }
          }
        }
      }
    });

    console.log("Collections created successfully.");
  } catch (error) {
    console.error("Error creating collections:", error);
  } finally {
    await client.close();
  }
}

createCollections();
