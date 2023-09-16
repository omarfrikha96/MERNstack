// import mongoose to build our Model

const { mongoose } = require("mongoose");



const players = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "The Name of the player is required"],
        minLength: [2, 'name must be at least 2 characters in length']
},
position : {
    type: String,
},
gameOneStatus: {
    type: String,
    enum: ["Playing", "Not Playing", "Undecided"],
    default: "Undecided",
  },
  gameTwoStatus: {
    type: String,
    enum: ["Playing", "Not Playing", "Undecided"],
    default: "Undecided",
  },
  gameThreeStatus: {
    type: String,
    enum: ["Playing", "Not Playing", "Undecided"],
    default: "Undecided",
  },
},{ timestamps: true })


module.exports.playerSchema = mongoose.model("playerSchema", players)

