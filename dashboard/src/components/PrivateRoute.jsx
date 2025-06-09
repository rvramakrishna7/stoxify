// src/components/PrivateRoute.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://stoxify-c63v.onrender.com/verify-user", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
          navigate("/login", { replace: true });
        }
      })
      .catch(() => {
        setIsAuth(false);
        navigate("/login", { replace: true });
      });
  }, [navigate]);

  if (isAuth === null) {
    // While checking, show a loading spinner
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  
  return isAuth ? children : null;
};

export default PrivateRoute;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// const PrivateRoute = ({ children }) => {
//   const [isAuth, setIsAuth] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("https://stoxify-c63v.onrender.com/verify-user", { withCredentials: true })
//       .then((res) => {
//         if (res.data.success) {
//           setIsAuth(true);
//         } else {
//           setIsAuth(false);
//           navigate("/login", { replace: true });
//         }
//       })
//       .catch(() => {
//         setIsAuth(false);
//         navigate("/login", { replace: true });
//       });
//   }, [navigate]);

//   if (isAuth === null) {
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100">
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }
//   return isAuth ? children : null;
// };

// export default PrivateRoute;
