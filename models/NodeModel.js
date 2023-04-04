const mongoose = require("mongoose");

const NodeSchema = new mongoose.Schema({
  value: Number,
  left: Number,
  right: Number,
});

module.exports = mongoose.model("Node", NodeSchema);
