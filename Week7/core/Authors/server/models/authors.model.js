// import mongoose to build our Model

const { mongoose } = require("mongoose");



const authors = new mongoose.Schema({
    Name : {
        type: String,
        required: [true, "The Name of the author is required"],
        minLength: [3, 'The name must be more then 2 characters']
}
},{ timestamps: true })


module.exports.authorsSchema = mongoose.model("authorsSchema", authors)

