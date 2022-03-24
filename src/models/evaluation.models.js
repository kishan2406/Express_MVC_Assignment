const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema(
    {
        date_of_evaluation : {type: String, required: true},
        instructor: {
            type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
        },

        batch_id: {
            type: mongoose.Schema.Types.ObjectId,
      ref: "batch",
      required: true,
        },


    }, {
        versionKey: false,
        timestamps: true,
    }
)

const Student = mongoose.model("evaluation", studentSchema)