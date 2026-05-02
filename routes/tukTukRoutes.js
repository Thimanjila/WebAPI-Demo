const express = require("express");
const router = express.Router();

const {
    createTukTuk,
    getTukTuks
} = require("../controllers/tukTukController");

router.post("/", createTukTuk);
router.get("/", getTukTuks);

module.exports = router;