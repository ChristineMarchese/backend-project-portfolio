const db = require("../db/dbConfig.js");

const getAllCats = async () => {
  try{
    const allCats = await db.any("SELECT * FROM cats");
      return allCats;
      } catch(error) {
        return error;
  }    
};

const getOneCat = async (id) => {
  try{
    const oneCat = await db.one("SELECT * FROM cats WHERE id=$1", id)
    return oneCat;
  } catch(error) {
    return error;
  }
}; 

const newCat = async (cat) => {
  try{
    const createCat = await db.one("INSERT INTO cats (name, image, cat_id, gender, age, is_available, cost, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 ) RETURNING * ",
     [cat.name, cat.image, cat.cat_id, cat.gender, cat.age, cat.is_available, cat.cost, cat.description]
    )
      return createCat;
    } catch(error) {
      return error;
  }
}




module.exports = { getAllCats, getOneCat, newCat };