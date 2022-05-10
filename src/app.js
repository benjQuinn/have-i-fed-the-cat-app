const express = require("express");
const { Cat } = require("./models");

const app = express();

app.use(express.json());

// GET
app.get("/cats", (req, res) => {
  Cat.findAll(req.body).then((cat) => res.status(201).json(cat));
});

app.get("/cats/:catId", (req, res) => {
  Cat.findByPk(req.params.catId).then((cat) => res.status(201).json(cat));
});

// POST
app.post("/cats", (req, res) => {
  Cat.create(req.body).then((cat) => res.status(201).json(cat));
});

module.exports = app;
