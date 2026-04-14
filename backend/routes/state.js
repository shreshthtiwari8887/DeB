const express = require("express");
const router = express.Router();
const State = require("../models/state");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");
const translate = require("translate-google");

const translateText = async (text) => {
  if (!text) return text;
  try {
    return await translate(text, { to: 'hi' });
  } catch (error) {
    console.error("Translation failure:", error);
    return text;
  }
};

// GET all states
router.get("/", async (req, res) => {
  try {
    const states = await State.find().sort({ name: 1 });
    res.json(states);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET state by name
router.get("/name/:name", async (req, res) => {
  try {
    // We treat the name case-insensitive or exact match. We'll decode URI component.
    const stateName = decodeURIComponent(req.params.name);
    // Find with regex for case-insensitive match just in case
    const state = await State.findOne({ name: { $regex: new RegExp(`^${stateName}$`, "i") } });
    if (!state) return res.status(404).json({ message: "State not found" });
    res.json(state);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET single state by ID
router.get("/:id", async (req, res) => {
  try {
    const state = await State.findById(req.params.id);
    if (!state) return res.status(404).json({ message: "State not found" });
    res.json(state);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST create new state (publicly available for testing dynamic edits)
router.post("/", upload.array("images", 5), async (req, res) => {

  try {
    const { name, description, famousFood, famousPlaces, artCultureTradition } = req.body;
    const images = req.files ? req.files.map(file => file.path && file.path.startsWith('http') ? file.path : `http://localhost:8080/uploads/${file.filename}`) : [];

    const description_hi = await translateText(description);
    const famousFood_hi = await translateText(famousFood);
    const famousPlaces_hi = await translateText(famousPlaces);
    const artCultureTradition_hi = await translateText(artCultureTradition);

    const state = new State({ 
      name, 
      description, 
      description_hi,
      famousFood, 
      famousFood_hi,
      famousPlaces, 
      famousPlaces_hi,
      artCultureTradition, 
      artCultureTradition_hi,
      images 
    });
    await state.save();
    res.status(201).json(state);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// PUT update state (publicly available for testing dynamic edits)
router.put("/:id", upload.array("images", 5), async (req, res) => {

  try {
    const { name, description, famousFood, famousPlaces, artCultureTradition } = req.body;
    
    let images = undefined;
    if (req.files && req.files.length > 0) {
      images = req.files.map(file => file.path && file.path.startsWith('http') ? file.path : `http://localhost:8080/uploads/${file.filename}`);
    }

    const description_hi = await translateText(description);
    const famousFood_hi = await translateText(famousFood);
    const famousPlaces_hi = await translateText(famousPlaces);
    const artCultureTradition_hi = await translateText(artCultureTradition);

    const updateData = { 
      name, description, description_hi,
      famousFood, famousFood_hi,
      famousPlaces, famousPlaces_hi,
      artCultureTradition, artCultureTradition_hi
    };
    if (images) updateData.images = images;

    const state = await State.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!state) return res.status(404).json({ message: "State not found" });
    res.json(state);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE state (admin only)
router.delete("/:id", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Access denied" });

  try {
    const state = await State.findByIdAndDelete(req.params.id);
    if (!state) return res.status(404).json({ message: "State not found" });
    res.json({ message: "State deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;