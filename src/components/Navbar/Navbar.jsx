import React from "react";
import Profileinfo from "../Cards/Profileinfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 shadow-md">
      <h2 className="text-xl font-semibold text-black py-2">Notes</h2>

      <SearchBar />

      <Profileinfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
