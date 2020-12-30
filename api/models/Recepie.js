const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Recepie = new Schema({
  title: { type: String, required: true },
  ingrediences: { type: String, required: true },
  instructions: { type: String, required: true },
  author: { type: String }
});

module.exports = mongoose.model("Recepie", Recepie);
