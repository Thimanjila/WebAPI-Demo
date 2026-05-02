const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    tukTukId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TukTuk",
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },

    district: {
        type: String
    },
    province: {
        type: String
    },

    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Location", locationSchema);