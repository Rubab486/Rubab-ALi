const express = require("express");
const index = express();

const port = 5000;

//setting folder for static assets
index.use(express.static("Public"));

//setting view engine
index.set("view engine", "ejs");

//home page
index.get("/", (req, res) => {
  res.render("home");
});

//personalities page
index.get("/personalities", (req, res) => {
  res.render("personalities");
});

//cities page
index.get("/cities", (req, res) => {
  res.render("cities");
});

//tourist page
index.get("/tourist", (req, res) => {
  res.render("tourist");
});

index.get("/contact", (req, res) => {
  res.render("contact");
});

// Listening on port 5000
index.listen(port, () => {
  console.log(`SERVER LISTENING AT PORT ${port}`);
});
