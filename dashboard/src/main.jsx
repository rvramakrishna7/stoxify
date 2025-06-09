// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { CookiesProvider } from "react-cookie";

// import PrivateRoute from "./components/PrivateRoute";
// import Dashboard from "./components/Dashboard";
// import Login from "./components/LoginPage";


// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <CookiesProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//            <Route
//             path="/"
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/dashboard"
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </CookiesProvider>
//   </React.StrictMode>
// );


import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";      
import Login from "./components/LoginPage";

import Summary from "./components/Summary";
import Orders from "./components/Orders";
import Holdings from "./components/Holdings";
import Positions from "./components/Positions";
import Funds from "./components/Funds";
import Apps from "./components/Apps";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          {/* Public login route */}
          <Route path="/login" element={<Login />} />

          {/* 
            CHANGE #1: parent protected route now uses "/*" 
            so that /orders, /holdings, /positions etc. all fall under this 
          */}
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            {/* CHANGE #2: nested routes */}
            <Route index element={<Navigate to="summary" replace />} />
            <Route path="summary" element={<Summary />} />
            <Route path="orders" element={<Orders />} />
            <Route path="holdings" element={<Holdings />} />
            <Route path="positions" element={<Positions />} />
            <Route path="funds" element={<Funds />} />
            <Route path="apps" element={<Apps />} />
          </Route>

          {/* CHANGE #3: catch-all redirect to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);