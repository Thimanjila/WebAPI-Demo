const express = require("express");
const router = express.Router();

const {
    addLocation,
    getLocationsByTukTuk,
    filterLocations
} = require("../controllers/locationController");

// Auth Middleware
const authMiddleware = require("../middleware/auth");

/**
 * @openapi
 * /api/location:
 *   post:
 *     summary: Add GPS location for a TukTuk
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tukTukId:
 *                 type: string
 *                 example: 69efb982b4e240f300132173
 *               latitude:
 *                 type: number
 *                 example: 7.2906
 *               longitude:
 *                 type: number
 *                 example: 80.6337
 *     responses:
 *       201:
 *         description: Location added successfully
 */
router.post("/", authMiddleware, addLocation);

/**
 * @openapi
 * /api/location:
 *   get:
 *     summary: Get all / filtered locations
 *     responses:
 *       200:
 *         description: List of locations
 */
router.get("/", filterLocations);

/**
 * @openapi
 * /api/location/{tukTukId}:
 *   get:
 *     summary: Get location history for a TukTuk
 *     parameters:
 *       - in: path
 *         name: tukTukId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Location history
 */
router.get("/:tukTukId", getLocationsByTukTuk);

module.exports = router;






