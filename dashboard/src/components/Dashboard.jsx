import React from "react";
import { Outlet } from "react-router-dom";   
import TopBar from "./TopBar";                    
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <>
      <TopBar />
      <div className="dashboard-container container-fluid px-0 d-flex min-vh-100 bg-light">
        <GeneralContextProvider>
          <div
            className="watchlist-wrapper bg-white p-3 border-end shadow-sm"
            style={{ minWidth: "350px" }}
          >
            <WatchList />
          </div>
        </GeneralContextProvider>
        <div className="content p-4 w-100">
         
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;