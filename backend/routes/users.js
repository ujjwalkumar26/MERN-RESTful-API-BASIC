var express = require('express');
var router = express.Router();
const PersonModel = require("./schema");
router.post('/', async function(req, res, next) {
  const person = new PersonModel(req.body);
  console.log(person);
  try {
    await person.save();
    res.send({sent: true});
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
