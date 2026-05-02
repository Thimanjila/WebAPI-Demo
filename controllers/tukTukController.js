const TukTuk = require("../models/TukTuk");

// CREATE tuk-tuk
exports.createTukTuk = async (req, res) => {
    try {
        const tuk = new TukTuk(req.body);
        const saved = await tuk.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET all tuk-tuks
exports.getTukTuks = async (req, res) => {
    try {
        const data = await TukTuk.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};