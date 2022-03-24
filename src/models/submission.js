const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema(
    {
        
        evaluation_id: {
            type: mongoose.Schema.Types.ObjectId,
      ref: "evaluation",
      required: true,
        },

        student_id: {
            type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
        },


    }, {
        versionKey: false,
        timestamps: true,
    }
)

const Student = mongoose.model("submission", studentSchema)