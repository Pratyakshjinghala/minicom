export default function SortDropdown({ sort, setSort }) {
  return (
    <div className="relative inline-block">
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="appearance-none border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                   bg-white shadow-sm transition"
      >
        <option value="">Sort By</option>
        <option value="price-asc">💲 Price: Low → High</option>
        <option value="price-desc">💲 Price: High → Low</option>
        <option value="title-asc">🔤 Title: A → Z</option>
        <option value="title-desc">🔤 Title: Z → A</option>
      </select>

      {/* Custom dropdown arrow */}
      <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
        ▼
      </span>
    </div>
  );
}
