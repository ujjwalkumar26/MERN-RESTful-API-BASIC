var express = require('express');
var router = express.Router();
const PersonModel = require("./schema");

router.delete('/',async function(req,res){
   PersonModel.deleteMany({})
  .then(()=>{res.send({deleted:true})})
  .catch(function(error){console.log(error)});
})
router.get('/',async function(req, res) {
    const data = await PersonModel.find({});

    try {
      res.send(data);
    } catch (error) {
      res.status(500).send(error);
    }
});

module.exports = router;
