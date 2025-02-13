// Import required modules 
const express = require("express");
const cors = require("cors"); 
const dotenv = require("dotenv"); 
const mongoose = require("mongoose"); 

 // Load environment variables dotenv.config(); 

 // Initialize Express app 
const app = express(); 

 // Middleware 
app.use(cors()); // Allow cross-origin requests 
app.use(express.json()); // Parse JSON requests 

 // Connect to MongoDB 
const connectDB = async () => { 
 try {
  await mongoose.connect(process.env.MONGO_URI, {
     useNewUrlParser: true, 
     useUnifiedTopology: true,
   });
   console.log("MongoDB connected successfully!");
 } catch (error) {
  console.error("MongoDB connection failed:", error.message);
  process.exit(1);
 }
}; 

// Test Route
app.get("/", (req, res) => {
    res.send("Welcome to Eagle Eye Pregame Backend!"); 
});

 // Start the Server
 const PORT = process.env.PORT || 5000;
 app.listen(PORT, async () => {
     console.log(`Server running on http://localhost:${PORT}`); 
     await connectDB(); // Connect to the database when server starts
   });