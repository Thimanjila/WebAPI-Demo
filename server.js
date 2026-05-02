
const locationRoutes = require("./routes/locationRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const tukTukRoutes = require("./routes/tukTukRoutes");

// Swagger imports
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Swagger config
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TukTuk API",
      version: "1.0.0"
    }
  },
  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJsDoc(options);

// Swagger route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// routes
app.use("/api/tuktuks", tukTukRoutes);
app.use("/api/location", locationRoutes);

// test route
app.get("/", (req, res) => {
    res.send("Tuk Tuk API is running...");
});

// connect database
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});