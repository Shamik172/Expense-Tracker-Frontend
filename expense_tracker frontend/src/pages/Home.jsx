import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import FilterBar from "../components/FilterBar";

const Home = () => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("date_desc");
  const [refresh, setRefresh] = useState(false);  // to update expenselist when added

return (
  <div className="min-h-screen bg-[#020617] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-black pb-10">
    <div className="max-w-4xl mx-auto px-4 pt-6 space-y-6">
      <header className="px-1">
        <h1 className="text-xl sm:text-2xl font-bold text-white">My Dashboard</h1>
      </header>
      <ExpenseForm setRefresh={setRefresh}/>
      <FilterBar category={category} setCategory={setCategory} sort={sort} setSort={setSort} />
      <ExpenseList category={category} sort={sort} refresh={refresh} />
    </div>
  </div>
);
};

export default Home;
