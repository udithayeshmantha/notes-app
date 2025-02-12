import React from "react";
import { getInitials } from "../../utils/helper";

const Profileinfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3 ">
      <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center">
        {getInitials("Udith Ayeshmantha")}
      </div>
      <div className="flex flex-col items-end">
        <p className="text-sm">Udith Ayeshmantha</p>
        <button
          className="text-sm cursor-pointer text-red-600"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profileinfo;
