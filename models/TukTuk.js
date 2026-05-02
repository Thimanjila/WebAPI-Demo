const mongoose = require("mongoose");

const tukTukSchema = new mongoose.Schema({
    vehicleNumber: {
        type: String,
        required: true,
        unique: true
    },
    driverName: {
        type: String,
        required: true
    },
    deviceId: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

module.exports = mongoose.model("TukTuk", tukTukSchema);