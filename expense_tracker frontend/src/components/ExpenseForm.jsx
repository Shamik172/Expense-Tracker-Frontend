import { useState } from "react";
import API from "../api/api";
import { notify } from "../components/Notification";

const ExpenseForm = ({ setRefresh }) => {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/expenses", {
      ...form,
      amount: Number(form.amount),
    }, {
      headers: { "Idempotency-Key": Date.now().toString() }
    });
    notify("Expense added successfully", "success");
    setRefresh(prev => !prev); // trigger list reload
  };

return (
  <form onSubmit={handleSubmit} className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl space-y-4">
    <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">Add Expense</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <input name="amount" type="number" placeholder="Amount (₹)" onChange={handleChange}
        className="bg-slate-800/40 border border-white/5 p-2.5 rounded-xl text-sm text-white outline-none focus:border-blue-500 transition-all" />
      <input name="category" placeholder="Category" onChange={handleChange}
        className="bg-slate-800/40 border border-white/5 p-2.5 rounded-xl text-sm text-white outline-none focus:border-blue-500 transition-all" />
      <input name="description" placeholder="Description" onChange={handleChange}
        className="bg-slate-800/40 border border-white/5 p-2.5 rounded-xl text-sm text-white outline-none focus:border-blue-500 transition-all" />
      <input name="date" type="date" onChange={handleChange}
        className="bg-slate-800/40 border border-white/5 p-2.5 rounded-xl text-sm text-white [color-scheme:dark] outline-none focus:border-blue-500" />
    </div>
    <button className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-xl text-sm shadow-lg shadow-blue-600/20 active:scale-95 transition-all">
      Add Transaction
    </button>
  </form>
);
};

export default ExpenseForm;
