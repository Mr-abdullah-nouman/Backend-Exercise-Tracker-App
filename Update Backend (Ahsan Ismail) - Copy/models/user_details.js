const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'name is required'],
  },
  description: {
    type: String,
    required: [true,'description is required'],
  },
  type_of_excercise: {
    type: String,
    enum: ["run", "bicycle ride", "swim", "walk", "hike"],
    required: [true,'type_of_excercise is required'],
  },
  duration: {
    type: Number,
    required: [true,'duration is required'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;