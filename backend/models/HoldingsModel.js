const { Schema, model } = require("mongoose");

const HoldingsSchema = new Schema({
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
});

const HoldingsModel = model("holding", HoldingsSchema);

module.exports = HoldingsModel;
