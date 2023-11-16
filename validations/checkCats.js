
const checkName = (req, res, next) => {
    if(req.body.name) {
      next()
    } else {
      res.status(400).json( { error: "Name is required"})
    }
};

const checkBoolean = (req, res, next) => {
  const isAvail = req.body.is_available;
   if(typeof isAvail === 'boolean') {
    next()
   } else {
    res.status(400).json( { error: "is_available must be a boolean" } )
   }
}

module.exports = { checkName, checkBoolean };