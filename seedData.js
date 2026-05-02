const mongoose = require("mongoose");
require("dotenv").config();

const Province = require("./models/Province");
const District = require("./models/District");
const PoliceStation = require("./models/PoliceStation");

const connectDB = require("./config/db");

const provinces = [
  "Western","Central","Southern","Northern","Eastern",
  "North Western","North Central","Uva","Sabaragamuwa"
];

const districts = [
  { name: "Colombo", province: "Western" },
  { name: "Gampaha", province: "Western" },
  { name: "Kalutara", province: "Western" },

  { name: "Kandy", province: "Central" },
  { name: "Matale", province: "Central" },
  { name: "Nuwara Eliya", province: "Central" },

  { name: "Galle", province: "Southern" },
  { name: "Matara", province: "Southern" },
  { name: "Hambantota", province: "Southern" },

  { name: "Jaffna", province: "Northern" },
  { name: "Kilinochchi", province: "Northern" },
  { name: "Mannar", province: "Northern" },
  { name: "Vavuniya", province: "Northern" },
  { name: "Mullaitivu", province: "Northern" },

  { name: "Batticaloa", province: "Eastern" },
  { name: "Ampara", province: "Eastern" },
  { name: "Trincomalee", province: "Eastern" },

  { name: "Kurunegala", province: "North Western" },
  { name: "Puttalam", province: "North Western" },

  { name: "Anuradhapura", province: "North Central" },
  { name: "Polonnaruwa", province: "North Central" },

  { name: "Badulla", province: "Uva" },
  { name: "Monaragala", province: "Uva" },

  { name: "Ratnapura", province: "Sabaragamuwa" },
  { name: "Kegalle", province: "Sabaragamuwa" }
];

const stations = [
  { name: "Colombo Central", district: "Colombo", province: "Western" },
  { name: "Negombo", district: "Gampaha", province: "Western" },
  { name: "Kalutara", district: "Kalutara", province: "Western" },

  { name: "Kandy HQ", district: "Kandy", province: "Central" },
  { name: "Matale", district: "Matale", province: "Central" },

  { name: "Galle HQ", district: "Galle", province: "Southern" },
  { name: "Matara", district: "Matara", province: "Southern" },

  { name: "Jaffna HQ", district: "Jaffna", province: "Northern" },
  { name: "Vavuniya", district: "Vavuniya", province: "Northern" },

  { name: "Batticaloa", district: "Batticaloa", province: "Eastern" },
  { name: "Trincomalee", district: "Trincomalee", province: "Eastern" },

  { name: "Kurunegala", district: "Kurunegala", province: "North Western" },
  { name: "Puttalam", district: "Puttalam", province: "North Western" },

  { name: "Anuradhapura", district: "Anuradhapura", province: "North Central" },
  { name: "Polonnaruwa", district: "Polonnaruwa", province: "North Central" },

  { name: "Badulla", district: "Badulla", province: "Uva" },
  { name: "Monaragala", district: "Monaragala", province: "Uva" },

  { name: "Ratnapura", district: "Ratnapura", province: "Sabaragamuwa" },
  { name: "Kegalle", district: "Kegalle", province: "Sabaragamuwa" },

  { name: "Special Crimes Unit", district: "Colombo", province: "Western" }
];

async function seed() {
  await connectDB();

  await Province.deleteMany();
  await District.deleteMany();
  await PoliceStation.deleteMany();

  await Province.insertMany(provinces.map(p => ({ name: p })));
  await District.insertMany(districts);
  await PoliceStation.insertMany(stations);

  console.log("Admin data inserted");
  process.exit();
}

seed();