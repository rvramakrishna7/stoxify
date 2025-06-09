// import { Route, Routes } from "react-router-dom";
// import Apps from "./Apps";
// import Funds from "./Funds";
// import Holdings from "./Holdings";
// import Orders from "./Orders";
// import Positions from "./Positions";
// import Summary from "./Summary";
// import WatchList from "./WatchList";
// import TopBar from "./TopBar";
// import { GeneralContextProvider } from "./GeneralContext";

// const Dashboard = () => {
//   return (
//     <>
//       <TopBar />
//       <div className="ddashboard-container container-fluid px-0 d-flex min-vh-100 bg-light">
//         <GeneralContextProvider>
//           <div className="watchlist-wrapper bg-white p-3 border-end shadow-sm" style={{ minWidth: "350px" }}>
//             <WatchList />
//           </div>
//         </GeneralContextProvider>
//         <div className="content p-4 w-100">
//           <Routes>
//             <Route path="/" element={<Summary />} />
//             <Route path="/orders" element={<Orders />} />
//             <Route path="/holdings" element={<Holdings />} />
//             <Route path="/positions" element={<Positions />} />
//             <Route path="/funds" element={<Funds />} />
//             <Route path="/apps" element={<Apps />} />
//           </Routes>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

// src/components/dashboard.jsx
import React from "react";
import { Outlet } from "react-router-dom";    // CHANGE #4: import Outlet
import TopBar from "./TopBar";
import Menu from "./Menu";                     // CHANGE #5: bring in your nav menu
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <>
      <TopBar />
      <Menu />                              {/* CHANGE #5: render Menu */}
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
          {/* CHANGE #4: Outlet renders Summary, Orders, Holdings, etc. */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;