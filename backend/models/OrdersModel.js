const { Schema, model } = require("mongoose");

const OrdersSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  qty: {
    type: Number,
  },
  mode: {
    type: String,
  },
});

const OrdersModel = model("order", OrdersSchema);
module.exports = OrdersModel;
