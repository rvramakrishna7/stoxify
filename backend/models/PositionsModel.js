const { Schema, model } = require("mongoose");

const PositionsSchema = new Schema({
  product: {
    type: String,
  },
  name: {
    type: String,
  },
  qty: {
    type: Number,
  },
  avg: {
    type: Number,
  },
  price: {
    type: Number,
  },
  net: {
    type: String,
  },
  day: {
    type: String,
  },
  isLoss: {
    type: Boolean,
  },
});

const PositionsModel = model("position", PositionsSchema);

module.exports = PositionsModel;
