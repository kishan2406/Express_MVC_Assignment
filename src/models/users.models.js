const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        firstName:{type: String, required: true},
        lastName: {type: String, required: false},
        gender: {
            type: String,
               enum: ["Male", "Female"],
               default: "Male",
        },
        DOB : {type: Number, required: true},
        
    }, {

        versionKey: false,
        timestamps: true,
    }
);

const User = mongoose.model("user", userSchema)
// this line connect to mongodb
//it tells mongoose that connect User model to users collection and get
// data in userSchema format