const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const bloodRoutes = require("./routes/bloodRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to BloodLine API"
    });
});

app.use("/api/blood", bloodRoutes);

const PORT = process.env.PORT || 6811;

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`BloodLine API is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
    }
}

startServer();