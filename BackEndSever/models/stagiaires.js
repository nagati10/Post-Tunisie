// models/stagiaires.js
const mongoose = require("mongoose");

const stagiaireSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  stagiairestate: {
    type: String,
  },
});

const StagiaireModel = mongoose.model("stagiaires", stagiaireSchema);

module.exports = StagiaireModel;


