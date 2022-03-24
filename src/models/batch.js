const mongoose = require("mongoose")

const batchSchema = new mongoose.Schema(
    {
        Batch_name : {type: String, required: true},
    
    }, {
        versionKey: false,
        timestamps: true,
    }
)

const batch = mongoose.model("batch", batchSchema)