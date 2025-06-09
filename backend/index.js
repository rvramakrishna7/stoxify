require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const authRoute = require("./Routes/AuthRoute");

const HoldingsModel = require("./models/HoldingsModel");
const OrdersModel = require("./models/OrdersModel");
const PositionsModel = require("./models/PositionsModel");

const app = express();
app.set("trust proxy", true);
const port = 8080;
const PORT = process.env.PORT || port;
const uri = process.env.MONGO_ATLAS_DB_URL || process.env.LOCAL_MONGODB_URL;

const allowedOrigins = [
  "https://stoxify-f3um.onrender.com",
  "https://stoxify-dashboard.onrender.com",
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g. mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

mongoose
  .connect(uri)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
  
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, 'views'));


// Database Connection

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