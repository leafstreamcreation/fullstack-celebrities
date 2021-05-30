const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    tite: String,
    description: String,
    imageURL: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Movie", movieSchema);
