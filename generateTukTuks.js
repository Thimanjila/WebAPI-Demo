
const axios = require("axios");

async function generate() {
  try {
    for (let i = 1; i <= 200; i++) {

      await axios.post("http://localhost:3000/api/tuktuks", {
        vehicleNumber: `WP CAB ${1000 + i}`,
        driverName: `Driver ${i}`,
        deviceId: `DEV${i}`
      });

      console.log("Created TukTuk", i);
    }

    console.log(" 200 TukTuks created");

  } catch (error) {
    console.log(" Error:", error.message);
  }
}

generate();