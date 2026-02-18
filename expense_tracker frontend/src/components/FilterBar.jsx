const FilterBar = ({ category, setCategory, sort, setSort }) => {
return (
  <div className="flex flex-col sm:flex-row gap-3 bg-slate-900/40 backdrop-blur-md border border-white/5 p-3 rounded-2xl shadow-xl">
    <input
      placeholder="Filter by category..."
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="flex-1 bg-slate-800/40 border border-white/5 focus:border-blue-500 outline-none p-2 rounded-xl text-xs sm:text-sm text-white"
    />
    <button
      onClick={() => setSort("date_desc")}
      className="px-4 py-2 bg-slate-800/60 text-slate-300 border border-white/5 rounded-xl text-[10px] sm:text-xs font-bold hover:bg-blue-600 hover:text-white transition-all"
    >
      Sort by Date
    </button>
  </div>
);
};

export default FilterBar;
