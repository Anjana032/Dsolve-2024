const { MongoClient } = require('mongodb');

//const uri = "your_mongodb_uri_here";
const username = encodeURIComponent("meenumegha7222");
const password = encodeURIComponent("Black@Pearl007");
const uri = `mongodb+srv://${username}:${password}@shareaplate.khbdkrt.mongodb.net/?retryWrites=true&w=majority&appName=ShareAPlate`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function addMockFoodData() {
    try {
      await client.connect();
      const database = client.db("My-database");
      const foodCollection = database.collection("Food");
  
      // Insert mock food data into the Food collection
      await foodCollection.insertMany([
        { foodName: "Veg Meal", quantity: 0 },
        { foodName: "Veg Biriyani", quantity: 0 },
        { foodName: "Chicken Biriyani", quantity: 0 },
        { foodName: "Upma", quantity: 0 },
        { foodName: "Chapatis", quantity: 0 },
        { foodName: "Idli", quantity: 0 },
        { foodName: "Dosa", quantity: 0 },
        { foodName: "Veg Kuruma", quantity: 0 },
        { foodName: "Chicken Curry", quantity: 0 }
      ]);
  
      console.log("Mock food data added successfully.");
    } catch (error) {
      console.error("Error adding mock food data:", error);
    } finally {
      await client.close();
    }
  }
  
  addMockFoodData();
  