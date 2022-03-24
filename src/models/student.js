const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema(
    {
        roll_id : {type: String, required: true},
        current_batch: {type: String, required: false},

    }, {
        versionKey: false,
        timestamps: true,
    }
)

const Student = mongoose.model("student", studentSchema)