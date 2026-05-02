const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema({
    name: String,
    province: String
});

module.exports = mongoose.model("District", districtSchema);