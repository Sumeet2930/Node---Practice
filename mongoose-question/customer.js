const mongoose = require('mongoose');

// 1️⃣ Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ecommerceDB')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// 2️⃣ Customer Schema
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true   // No duplicate emails allowed
  },
  age: {
    type: Number
  },
  city: {
    type: String
  }
});


// 3️⃣ Customer Model
const Customer = mongoose.model('Customer', customerSchema);


// 4️⃣ Insert Customers
async function addCustomers() {
  try {
    await Customer.insertMany([
      {
        name: "Sumeet",
        email: "sumeet@gmail.com",
        age: 22,
        city: "Pune"
      },
      {
        name: "Amit",
        email: "amit@gmail.com",
        age: 24,
        city: "Mumbai"
      },
      {
        name: "Rahul",
        email: "rahul@gmail.com",
        age: 26,
        city: "Delhi"
      }
    ]);

    console.log("✅ Customers inserted successfully");
  } catch (error) {
    console.log("❌ Error:", error.message);
  } finally {
    mongoose.connection.close();
  }
}

addCustomers();
