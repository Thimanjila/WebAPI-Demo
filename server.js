
const locationRoutes = require("./routes/locationRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");


const tukTukRoutes = require("./routes/tukTukRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());


app.use("/api/tuktuks", tukTukRoutes);

app.use("/api/location", locationRoutes);

// connect database
connectDB();

// test route
app.get("/", (req, res) => {
    res.send("Tuk Tuk API is running...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
