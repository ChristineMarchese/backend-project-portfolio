const express = require("express");

const cats = express.Router();

const { getAllCats, getOneCat, newCat } = require("../queries/cat.js");

//INDEX -all cats - /cats

cats.get("/", async (req, res) => {
  const allCats = await getAllCats();
  if(allCats[0]){
    res.status(200).json(allCats);
  } else {
    res.status(500).json( {error: "server error" } );
   }
  });

  // SHOW -get one cat from the id /cats/:id

  cats.get("/:id", async (req, res) => {
    const id = req.params.id;
    const oneCat = await getOneCat(id);
    if(oneCat) {
      res.status(200).json(oneCat)
    } else {
      res.status(404).json( { error: "Page Not Found" } );
    }
 });

 // POST - create a cat and then add it /cats
  
cats.post("/", express.json(), async (req, res) => {
  const body = req.body;
  const cat = await newCat(body);
  res.status(200).json(cat);
});



module.exports = cats