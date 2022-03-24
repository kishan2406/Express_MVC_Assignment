const mongoose = require("mongoose");

module.exports = () => {

    return mongoose.connect("mongodb+srv://kishanpr:kishanpr@cluster0.4pm3t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}