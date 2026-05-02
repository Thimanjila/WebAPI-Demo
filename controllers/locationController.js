const Location = require("../models/Location");

// Save GPS location
exports.addLocation = async (req, res) => {
    try {
        const { tukTukId, latitude, longitude ,  district, province } = req.body;

        const newLocation = new Location({
            tukTukId,
            latitude,
            longitude, 
            district,
            province
        });

        const saved = await newLocation.save();

        res.status(201).json({
            message: "Location recorded",
            data: saved
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get location history by tukTukId
exports.getLocationsByTukTuk = async (req, res) => {
    try {
        const { tukTukId } = req.params;

        const locations = await Location.find({ tukTukId })
            .sort({ timestamp: -1 });

        res.json(locations);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 🔍 Filter locations by district or province
exports.filterLocations = async (req, res) => {
    try {
        const { district, province } = req.query;

        let filter = {};

        if (district) {
            filter.district = district;
        }

        if (province) {
            filter.province = province;
        }

        const locations = await Location.find(filter);

        res.json(locations);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};