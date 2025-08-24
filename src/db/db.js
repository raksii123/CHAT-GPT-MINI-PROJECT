const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB successfully ✅");
    } catch (err) {
        console.error("Error connecting to DB ❌", err);
    }
}

module.exports = connectDB;
