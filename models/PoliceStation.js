const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
    name: String,
    district: String,
    province: String
});

module.exports = mongoose.model("PoliceStation", stationSchema);