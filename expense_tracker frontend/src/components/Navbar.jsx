import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";
import { notify } from "./Notification";

const Navbar = ({ refreshAuth }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/auth/me")
      .then(() => setLoggedIn(true))
      .catch(() => setLoggedIn(false));
  }, [refreshAuth]);

  const logout = async () => {
    await API.post("/auth/logout");
    setLoggedIn(false);
    notify("Logged out successfully", "success");
    navigate("/login");
  };

  return (
  <nav className="sticky top-0 z-[100] w-full bg-slate-950/90 backdrop-blur-2xl border-b border-blue-500/20 px-4 sm:px-8 py-3 shadow-2xl shadow-blue-900/20">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link to="/" className="text-lg sm:text-xl font-black tracking-tighter text-white hover:text-blue-400 transition-all">
        EXPENSE<span className="text-blue-500">.</span>IO
      </Link>

      <div className="flex items-center gap-3 sm:gap-6">
        {loggedIn ? (
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-xl text-[11px] sm:text-sm font-bold transition-all shadow-lg shadow-red-500/20 border border-red-400/30"
          >
            Sign Out
          </button>
        ) : (
          <>
            <Link to="/login" className="text-slate-200 hover:text-white text-[11px] sm:text-sm font-bold transition-colors">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-xl text-[11px] sm:text-sm font-bold transition-all border border-blue-400/30"
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </div>
  </nav>
);
};

export default Navbar;
