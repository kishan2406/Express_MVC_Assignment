const mongoose = require("mongoose");
const { router } = require("..");

const User = require("../models/users.models")

const app = express.Router();

//crud operation
router.get("", async(req,res) => {

    try{
        const users = await User.find().lean().exec();

        return res.status(200).send("users", user)

    }catch(err){
        
        return res
        .status(500).send({message: err.message})

    }
});


router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id).lean().exec();
      
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.delete("/:id", crudController.deleteOne(User));
  
  module.exports = router;