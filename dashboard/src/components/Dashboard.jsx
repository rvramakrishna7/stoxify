import { Route, Routes } from "react-router-dom";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import TopBar from "./TopBar";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <>
      <TopBar />
      <div className="ddashboard-container container-fluid px-0 d-flex min-vh-100 bg-light">
        <GeneralContextProvider>
          <div className="watchlist-wrapper bg-white p-3 border-end shadow-sm" style={{ minWidth: "350px" }}>
            <WatchList />
          </div>
        </GeneralContextProvider>
        <div className="content p-4 w-100">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
