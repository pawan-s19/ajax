const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ajax");

const userSchema = mongoose.Schema({
  username: String,
  image: String,
});

module.exports = mongoose.model("users", userSchema);
