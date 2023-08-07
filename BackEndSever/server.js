//server.js 2
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const StagiaireModel = require("./models/stagiaires");
const cors = require("cors");

mongoose.connect("mongodb+srv://nagatinajd:YwDqZ1HVPlMkatuc@cluster0.yqaz1hq.mongodb.net/PostTN?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Endpoint to handle the verification
app.post("/verifyStagiaire", async (req, res) => {
  try {
    const { id, email } = req.body;
    const existingStagiaireById = await StagiaireModel.findOne({ id });
    const existingStagiaireByEmail = await StagiaireModel.findOne({ email });

    if (existingStagiaireById) {
      return res.status(409).json({ error: "ID already exists. Please choose a different one." });
    }

    if (existingStagiaireByEmail) {
      return res.status(409).json({ error: "Email already exists. Please choose a different one." });
    }

    res.json({ message: "Stagiaire is valid." });
  } catch (err) {
    console.error("Error verifying stagiaire:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Endpoint to handle creating a new Stagiaire
app.post("/users", async (req, res) => {
  try {
    const { id, email } = req.body;

    // Check if the ID or Email already exists in the database
    const existingStagiaireById = await StagiaireModel.findOne({ id });
    const existingStagiaireByEmail = await StagiaireModel.findOne({ email });

    if (existingStagiaireById) {
      return res.status(409).json({ error: "ID already exists. Please choose a different one." });
    }

    if (existingStagiaireByEmail) {
      return res.status(409).json({ error: "Email already exists. Please choose a different one." });
    }

    // If the ID and Email are unique, proceed to create the new Stagiaire
    const stagiaire = new StagiaireModel(req.body);
    await stagiaire.save();

    res.json(stagiaire);
  } catch (err) {
    console.error("Error creating Stagiaire:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to handle updating a team member
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the team member by their _id in the request parameters
    const teamMember = await StagiaireModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true } // Return the updated team member in the response
    );

    if (!teamMember) {
      return res.status(404).json({ error: "Team member not found." });
    }

    res.json(teamMember);
  } catch (err) {
    console.error("Error updating team member:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Endpoint to handle deleting a team member
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the team member by their _id in the request parameters
    const deletedTeamMember = await StagiaireModel.findByIdAndDelete(id);

    if (!deletedTeamMember) {
      return res.status(404).json({ error: "Team member not found." });
    }

    res.json({ message: "Team member deleted successfully.", deletedTeamMember });
  } catch (err) {
    console.error("Error deleting team member:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to fetch all Stagiaires
app.get("/users", async (req, res) => {
  try {
    const stagiaires = await StagiaireModel.find();
    res.json(stagiaires);
  } catch (err) {
    console.error("Error fetching stagiaires:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
