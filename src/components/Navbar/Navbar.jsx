import React from "react";
import Profileinfo from "../Cards/Profileinfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };
  
 const onClearSearch = () => {
    setSearchValue("");
  };

  const handleSearch = () => {
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 shadow-md">
      <h2 className="text-xl font-semibold text-black py-2">Notes</h2>

      <SearchBar
        value={searchValue}
        onChange={({ target }) => {
          setSearchValue(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <Profileinfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
