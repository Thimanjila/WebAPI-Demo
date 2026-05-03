const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 */
router.post("/register", register);

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     summary: Login user
 */
router.post("/login", login);

module.exports = router;