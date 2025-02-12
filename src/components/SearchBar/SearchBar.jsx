import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-96 flex items-center border bg-slate-100 px-4 border-0 rounded-md">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-xs bg-transparent py-[11px] outline-none"
        value={value}
        onChange={onChange}
      />

      {value && (
        <MdClear
          onClick={onClearSearch}
          className="text-slate-600 hover:text-black cursor-pointer"
        />
      )}

      <FaSearch
        className="text-slate-600 ml-2 hover:text-black cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
