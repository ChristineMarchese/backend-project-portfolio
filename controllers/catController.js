const express = require("express");

const cats = express.Router();

const { getAllCats, getOneCat, newCat, deleteCat, updateCat } = require("../queries/cat.js");

const { checkName, checkBoolean } = require("../validations/checkCats")

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
  
cats.post("/", express.json(), checkName, checkBoolean, async (req, res) => {
  const body = req.body;
  const cat = await newCat(body);
  res.status(200).json(cat);
});

// DELETE cats/:id

cats.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deletedCat = await deleteCat(id);
  if(deletedCat.id){
    res.status(200).json(deletedCat)
    } else {
      res.status(404).json( { error: "Page Not Found" } )
    }
});

// PUT cats/:id

cats.put('/:id', express.json(), checkName, checkBoolean, async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updatedCat = await updateCat(id, body)
    if(updatedCat.id) {
     res.status(200).json(updatedCat)
    } else {
     res.status(404).json( { error: "Page Not Found"})
    }
})



module.exports = cats