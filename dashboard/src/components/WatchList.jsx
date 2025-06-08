import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnutChart";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container d-flex align-items-center justify-content-between mb-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search : Infy, Reliance.."
          className="form-control form-control-md"
        />
      </div>

      <ul className="list-unstyled">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      <div className="mt-4">
        <DoughnutChart data={data} />
      </div>
    </div>
  );
};

export default WatchList;




const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      className="mb-2 border rounded p-2 position-relative"
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="d-flex justify-content-between align-items-center">
        <p className={`mb-0 fw-semibold ${stock.isDown ? "text-danger" : "text-success"}`}>
          {stock.name}
        </p>
        <div className="d-flex align-items-center gap-2">
          <span className="text-muted small">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="text-danger" />
          ) : (
            <KeyboardArrowUp className="text-success" />
          )}
          <span className="fw-bold small">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};



const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  const handleBuyClick = () => generalContext.openBuyWindow(uid);

  return (
    <div className="d-flex flex-wrap gap-2 my-2 justify-content-end">
  <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
    <button className="btn btn-outline-success watchlist-btn" onClick={handleBuyClick}>
      Buy
    </button>
  </Tooltip>
  <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
    <button className="btn btn-outline-danger watchlist-btn">Sell</button>
  </Tooltip>
  <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
    <button className="btn btn-outline-primary watchlist-btn">
      <BarChartOutlined className="icon" />
    </button>
  </Tooltip>
  <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
    <button className="btn btn-outline-secondary watchlist-btn">
      <MoreHoriz className="icon" />
    </button>
  </Tooltip>
</div>
  );
};
