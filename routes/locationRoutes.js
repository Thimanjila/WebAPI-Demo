const express = require("express");
const router = express.Router();
const { filterLocations } = require("../controllers/locationController");

const {
    addLocation,
    getLocationsByTukTuk
} = require("../controllers/locationController");

// Auth Middleware
const authMiddleware = require("../middleware/auth");

// POST GPS data
router.post("/", authMiddleware, addLocation);
//  
router.get("/", filterLocations);

// GET history
router.get("/:tukTukId", getLocationsByTukTuk);






module.exports = router;
