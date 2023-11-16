const express = require("express");

const cats = express.Router();

const { getAllCats, getOneCat } = require("../queries/cat.js");

//INDEX -all cats - /cats

cats.get("/", async (req, res) => {
  const allCats = await getAllCats();
  if(allCats[0]){
    res.status(200).json(allCats);
  } else {
    res.status(500).json( {error: "server error" } );
   }
  });

  // SHOW -get one cat /cats/:id

  cats.get("/:id", async (req, res) => {
    const id = req.params.id;
    const oneCat = await getOneCat(id);
    if(oneCat) {
      res.status(200).json(oneCat)
    } else {
      res.status(404).json( { error: "Page Not Found" } );
    }
 });
  




module.exports = cats