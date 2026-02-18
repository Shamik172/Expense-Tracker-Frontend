import { useState } from "react";
import API from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import { notify } from "../components/Notification";

const Login = ({ setRefreshAuth }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        try {
            await API.post("/auth/login", { email, password });
            setRefreshAuth(prev => !prev);
            notify("Login successful", "success");
            navigate("/");
        } catch (err) {
            notify(
                err.response?.data?.message || "Login failed",
                "error"
            );
        }
    };


return (
  <div className="min-h-screen w-full flex items-center justify-center bg-[#020617] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-black px-4">
    <div className="w-full max-w-md">
      <form onSubmit={submit} className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-[2rem] p-6 sm:p-10 space-y-5">
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">Welcome Back</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Access your expense dashboard</p>
        </div>
        <div className="space-y-3">
          <input
            placeholder="Email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-950/50 border border-white/10 focus:border-blue-500 outline-none p-3 rounded-xl text-sm text-white placeholder-slate-600 transition-all"
          />
          <input
            placeholder="Password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-950/50 border border-white/10 focus:border-blue-500 outline-none p-3 rounded-xl text-sm text-white placeholder-slate-600 transition-all"
          />
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-blue-600/20 active:scale-95 transition-all">
          Sign In
        </button>
      </form>
    </div>
  </div>
);


};

export default Login;
