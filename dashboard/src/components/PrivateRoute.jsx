import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [authState, setAuthState] = useState({ loading: true, isAuth: false });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://stoxify-c63v.onrender.com/verify-user", { withCredentials: true })
      .then(res => {
        setAuthState({ loading: false, isAuth: res.data.success });
        if (!res.data.success) navigate("/login");
      })
      .catch(() => {
        setAuthState({ loading: false, isAuth: false });
        navigate("/login");
      });
  }, [navigate]);

  if (authState.loading) return <div>Loading...</div>;
  return authState.isAuth ? children : null;
};

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

export default PrivateRoute;
