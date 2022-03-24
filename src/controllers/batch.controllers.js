const mongoose = require("mongoose");
const { router } = require("..");

const User = require("../models/batch.models")

const app = express.Router();

router.get("", async(req,res) => {
    try{
    const evaluation = await batch.find().populate({ path: "batch" ,  select: {  Batch_name: 1 }})
    .lean()

    .exec();

  return res.status(200).send({ batch: batch });

} catch (error) {}
});
router.post("/", async (req, res) => {
try {
  const student = await batch.create(req.body);

  return res.status(200).send({ batch: batch });
  
} catch (error) {

  console.log(error);
}
});
router.patch("/:id", async (req, res) => {
try {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();
  return res.status(200).send(batch);
} catch (error) {
  console.log(error);
}
});

router.delete("/:id", async (req, res) => {
try {
  const student = await Student.findByIdAndDelete(req.params.id).lean().exec();
  return res.status(200).send(batch);
} catch (error) {
  console.log(error);
}
});

module.exports = router;