const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.send("API running");
});

// Test endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Smart Scheduler API" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API on http://localhost:${PORT}`);
});
