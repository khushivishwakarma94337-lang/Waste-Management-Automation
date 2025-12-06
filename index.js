const express = require("express");
const app = express();
app.use(express.static("public"));
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// ARRAYS MUST BE ABOVE ALL ROUTES
let users = [];
let complaints = [];
let workers = [
  { name: "ram" },
  { name: "Aman" },
  { name: "sita" }
];

// FORM PAGE
app.get("/form", (req, res) => {
  res.render("index.ejs");
});

// ADMIN PANEL
app.get("/admin", (req, res) => {
  res.render("admin.ejs", { complaints });
});

// ADD USER
app.post("/addUser", (req, res) => {
  users.push({
    name: req.body.name,
    location: req.body.location
  });
  res.redirect("http://127.0.0.1:5500/Waste-Management-Automation/public/index.html");
});

// ADD COMPLAINT
app.post("/addComplaint", (req, res) => {
  complaints.push({
    name: req.body.name,     // <<< FIXED
    query: req.body.query
  });
  res.redirect("http://127.0.0.1:5500/Waste-Management-Automation/public/index.html");
});

// DASHBOARD
app.get("/dashboard", (req, res) => {
  res.render("dashboard", { users, complaints });
});

// COMPLAINT FORM PAGE
app.get("/home/complaint", (req, res) => {
  res.render("complaint.ejs");
});

// WORKERS PAGE
app.get("/workers", (req, res) => {
  res.render("worker.ejs", { workers });
});
app.get("/contact",(req,res)=>{
    res.render("contact.ejs")
});
app.listen(port, () => {
  console.log("Server running on", port);
});