const axios = require("axios");

let tukTukIds = [];

// Load all tuk-tuk IDs
async function loadIds() {
  const res = await axios.get("http://localhost:3000/api/tuktuks");
  tukTukIds = res.data.map(t => t._id);
}

//  Sri Lanka areas
const areas = [
   // Western
  { district: "Colombo", province: "Western" },
  { district: "Gampaha", province: "Western" },
  { district: "Kalutara", province: "Western" },

  // Central
  { district: "Kandy", province: "Central" },
  { district: "Matale", province: "Central" },
  { district: "Nuwara Eliya", province: "Central" },

  // Southern
  { district: "Galle", province: "Southern" },
  { district: "Matara", province: "Southern" },
  { district: "Hambantota", province: "Southern" },

  // Northern
  { district: "Jaffna", province: "Northern" },
  { district: "Kilinochchi", province: "Northern" },
  { district: "Mannar", province: "Northern" },
  { district: "Vavuniya", province: "Northern" },
  { district: "Mullaitivu", province: "Northern" },

  // Eastern
  { district: "Batticaloa", province: "Eastern" },
  { district: "Ampara", province: "Eastern" },
  { district: "Trincomalee", province: "Eastern" },

  // North Western
  { district: "Kurunegala", province: "North Western" },
  { district: "Puttalam", province: "North Western" },

  // North Central
  { district: "Anuradhapura", province: "North Central" },
  { district: "Polonnaruwa", province: "North Central" },

  // Uva
  { district: "Badulla", province: "Uva" },
  { district: "Monaragala", province: "Uva" },

  // Sabaragamuwa
  { district: "Ratnapura", province: "Sabaragamuwa" },
  { district: "Kegalle", province: "Sabaragamuwa" }
];

//  Random GPS generator
function randomCoord() {
  return {
    latitude: 6.8 + Math.random() * 1.5,
    longitude: 79.5 + Math.random() * 1.5
  };
}

//  MAIN SIMULATION
async function simulateHistory() {
  await loadIds();

  console.log("🚀 Starting 7-day simulation...");

  const now = new Date();

  // Loop through 7 days
  for (let day = 0; day < 7; day++) {

    for (let hour = 0; hour < 24; hour++) {

      for (let id of tukTukIds) {

        const area = areas[Math.floor(Math.random() * areas.length)];
        const coord = randomCoord();

        // 🕒 Create past timestamp
        const timestamp = new Date(now);
        timestamp.setDate(now.getDate() - day);
        timestamp.setHours(hour);

        try {
          await axios.post("http://localhost:3000/api/location", {
            tukTukId: id,
            latitude: coord.latitude,
            longitude: coord.longitude,
            district: area.district,
            province: area.province,
            timestamp: timestamp
          });

        } catch (err) {
          console.log("Error:", err.message);
        }
      }

      console.log(`✅ Day ${day} | Hour ${hour} completed`);
    }
  }

  console.log(" 1 WEEK DATA GENERATED SUCCESSFULLY");
}

simulateHistory();