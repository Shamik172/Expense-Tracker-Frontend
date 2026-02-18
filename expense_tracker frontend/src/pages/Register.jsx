import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import { notify } from "../components/Notification";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        try {
            await API.post("/auth/register", { name, email, password });
            notify("Registration successful. Please login.", "success");
            navigate("/login");
        } catch (err) {
            notify(
                err.response?.data?.message || "Registration failed",
                "error"
            );
        }
    };



return (
  <div className="min-h-screen w-full flex items-center justify-center bg-[#020617] bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-black px-4">
    <div className="w-full max-w-md">
      <form onSubmit={submit} className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-[2rem] p-6 sm:p-10 space-y-5">
        <h2 className="text-xl sm:text-2xl font-black text-center text-white tracking-tight">Create Account</h2>
        <div className="space-y-3">
          <input placeholder="Full Name" required onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-950/50 border border-white/10 focus:border-cyan-500 outline-none p-3 rounded-xl text-sm text-white transition-all" />
          <input placeholder="Email" type="email" required onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-950/50 border border-white/10 focus:border-cyan-500 outline-none p-3 rounded-xl text-sm text-white transition-all" />
          <input placeholder="Password" type="password" required onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-950/50 border border-white/10 focus:border-cyan-500 outline-none p-3 rounded-xl text-sm text-white transition-all" />
        </div>
        <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-3 rounded-xl font-bold text-sm sm:text-base transition-all active:scale-95">
          Register Now
        </button>
      </form>
    </div>
  </div>
);

};

export default Register;
