require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const HoldingsModel = require("./models/HoldingsModel");
const OrdersModel = require("./models/OrdersModel");
const PositionsModel = require("./models/PositionsModel");
const authRoute = require("./Routes/AuthRoute");

const app = express();
const port = 8080;
const path = require('path');
const PORT = process.env.PORT || port;
const uri = process.env.MONGO_ATLAS_DB_URL || process.env.LOCAL_MONGODB_URL;


app.use(
  cors({
    origin: ["https://stoxify-f3um.onrender.com", "https://stoxify-dashboard.onrender.com"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,'public')));
app.set("views",(path.join(__dirname,'views')));
app.use("/", authRoute);

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});

// Database Connection
mongoose
  .connect(uri)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

// Additional routes
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  const allOrders = await OrdersModel.insertMany(req.body);
  res.json(allOrders);
});
