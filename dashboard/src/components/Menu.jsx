
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [username, setUsername] = useState("USERID");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const [cookies, removeCookie] = useCookies(["token"]);

  // Menu items list
  const menuItems = ["Orders", "Holdings", "Positions", "Funds", "Apps"];

  // Sync active menu tab with URL
  useEffect(() => {
    const path = location.pathname.replace("/", "");
    const idx = menuItems.findIndex(
      (item) => item.toLowerCase() === path
    );
    if (idx !== -1) setSelectedMenu(idx);
  }, [location.pathname]);

  // Fetch or load username
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    } else {
      axios
        .get("https://stoxify-c63v.onrender.com/verify-user", {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.success) {
            setUsername(res.data.user.username);
            localStorage.setItem("username", res.data.user.username);
          } else {
            navigate("/login", { replace: true });
          }
        })
        .catch(() => navigate("/login", { replace: true }));
    }
  }, [navigate]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle dropdown open/close
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // Logout handler
  const Logout = async () => {
    try {
      await axios.post(
        "https://stoxify-c63v.onrender.com/logout",
        {},
        { withCredentials: true }
      );
      removeCookie("token", { path: "/" });
      localStorage.removeItem("username");
      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Logout failed", err);
      navigate("/login", { replace: true });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm px-4">
      <div className="d-flex align-items-center gap-4 me-4">
        <Link
          to="/summary"
          className="navbar-brand text-primary fw-bold d-flex align-items-center gap-2 mb-0"
        >
          <i className="fa-solid fa-arrow-trend-up fs-4"></i>
          <span className="fs-5 text-dark">Stoxify</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {menuItems.map((item, idx) => (
            <li className="nav-item" key={idx}>
              <Link
                to={`/${item.toLowerCase()}`}
                className={`nav-link px-3 ${
                  selectedMenu === idx
                    ? "text-primary fw-semibold border-bottom border-primary"
                    : "text-dark"
                }`}
                onClick={() => setSelectedMenu(idx)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="position-relative" ref={dropdownRef}>
          <div
            className="text-secondary small fw-semibold d-flex align-items-center gap-1"
            onClick={toggleDropdown}
            style={{ cursor: "pointer" }}
          >
            <AccountCircleRoundedIcon fontSize="small" />
            <span>{username}</span>
            <i
              className={`ms-1 fa-solid fa-caret-${
                dropdownOpen ? "up" : "down"
              }`}
              style={{ fontSize: "0.6rem" }}
            ></i>
          </div>

          {dropdownOpen && (
            <div
              className="position-absolute bg-white border rounded shadow-sm mt-2 py-1"
              style={{
                right: 0,
                minWidth: "120px",
                zIndex: 1000,
              }}
            >
              <div
                className="dropdown-item text-danger fw-semibold px-2 text-center"
                onClick={Logout}
                onMouseEnter={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.target.style.textDecoration = "none")
                }
                style={{ cursor: "pointer" }}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
