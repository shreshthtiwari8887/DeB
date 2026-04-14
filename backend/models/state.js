const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  images: [{ type: String }], // Array of Cloudinary URLs
  famousFood: { type: String },
  famousPlaces: { type: String },
  artCultureTradition: { type: String },
  description_hi: { type: String },
  famousFood_hi: { type: String },
  famousPlaces_hi: { type: String },
  artCultureTradition_hi: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("State", stateSchema);