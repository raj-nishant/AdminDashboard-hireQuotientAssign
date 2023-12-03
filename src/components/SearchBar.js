import React from "react";

const SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-3/4 h-10 mt-4 mb-2 border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
