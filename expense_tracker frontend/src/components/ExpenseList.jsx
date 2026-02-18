import { useEffect, useState } from "react";
import API from "../api/api";

const ExpenseList = ({ category, sort, refresh}) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const { data } = await API.get(
        `/expenses?category=${category}&sort=${sort}`
      );
      setExpenses(data);
    };
    fetchExpenses();
  }, [category, sort, refresh]); // refetch when filter changes

  const total = expenses.reduce(
    (sum, e) => sum + Number(e.amount.$numberDecimal),
    0
  );


return (
  <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl">
    <div className="flex justify-between items-center mb-4 px-1">
      <h2 className="text-base sm:text-lg font-bold text-white">Expenses</h2>
      <div className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
        <span className="text-blue-400 text-[10px] sm:text-xs font-black">Total: ₹{total}</span>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left min-w-[450px]">
        <thead className="border-b border-white/5 text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-bold">
          <tr>
            <th className="pb-3 px-2">Date</th>
            <th className="pb-3 px-2">Description</th>
            <th className="pb-3 px-2">Category</th>
            <th className="pb-3 px-2 text-right">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {expenses.map((e) => (
            <tr key={e._id} className="text-xs sm:text-sm hover:bg-white/[0.02] transition-colors">
              <td className="py-3 px-2 text-slate-400">{new Date(e.date).toLocaleDateString()}</td>
              <td className="py-3 px-2 text-white font-medium">{e.description}</td>
              <td className="py-3 px-2"><span className="bg-slate-800 text-slate-300 text-[9px] px-2 py-0.5 rounded border border-white/5">{e.category}</span></td>
              <td className="py-3 px-2 text-right text-blue-400 font-bold">₹{Number(e.amount.$numberDecimal)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};

export default ExpenseList;
