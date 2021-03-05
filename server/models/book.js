let mongoose = require("mongoose");

// create a model class

/**
 * add your code to
 * create your model here
 *
 */

const bookModel = mongoose.Schema(
  {
    title: String,
    author: String,
    year: Number,
    description: String,
    price: Number,
  },
  { strict: false }
);

module.exports = mongoose.model("Book", bookModel);
