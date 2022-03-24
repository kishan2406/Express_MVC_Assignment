const mongoose = require("mongoose");
const { router } = require("..");

const User = require("../models/evaluation.models")

const app = express.Router();

router.get("", async(req,res) => {
    try{
    const evaluation = await evaluation.find().populate({ path: "evaluation" ,  select: { date_of_evaluation: 1, instructor: 1,_id:1,batch_id:1 }})
    .lean()
    .exec();
  return res.status(200).send({ evaluation: evaluation });
} catch (error) {}
});
router.post("/", async (req, res) => {
try {
  const student = await evaluation.create(req.body);
  return res.status(200).send({ evaluation: evaluation });
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
  return res.status(200).send(evaluation);
} catch (error) {
  console.log(error);
}
});

router.delete("/:id", async (req, res) => {
try {
  const student = await Student.findByIdAndDelete(req.params.id).lean().exec();
  return res.status(200).send(evaluation);
} catch (error) {
  console.log(error);
}
});

module.exports = router;