const express = require("express");
const router = express.Router();

const {
    createTukTuk,
    getTukTuks
} = require("../controllers/tukTukController");

/**
 * @openapi
 * /api/tuktuks:
 *   get:
 *     summary: Get all TukTuks
 *     responses:
 *       200:
 *         description: List of TukTuks
 */
router.get("/", getTukTuks);

/**
 * @openapi
 * /api/tuktuks:
 *   post:
 *     summary: Create a TukTuk
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vehicleNumber:
 *                 type: string
 *                 example: WP CAB 1234
 *               driverName:
 *                 type: string
 *                 example: Kamal
 *               deviceId:
 *                 type: string
 *                 example: DEV001
 *     responses:
 *       201:
 *         description: TukTuk created successfully
 */
router.post("/", createTukTuk);

module.exports = router;