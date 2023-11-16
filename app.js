const express = require("express");

const app = express();

// import cors 
const cors = require("cors");

// cat routes
const catController = require("./controllers/catController");



// middleware
app.use(cors());
app.use("/cats", catController);
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("*", (req, res) => {
  res.status(404).send( { message: "not found" } );
});

module.exports = app