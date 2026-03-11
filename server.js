const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("GPS Classroom Microservice Running");
});

app.get("/location", (req, res) => {
  res.json({
    classroom: "CSE Lab",
    latitude: 12.9716,
    longitude: 77.5946,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
