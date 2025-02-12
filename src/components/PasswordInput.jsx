import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setShowPassword] = React.useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!isShowPassword);
  };

  return (
    <div className="relative flex items-center bg-transparent border-1 border-gray-300 rounded mt-2">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full bg-transparent py-3 ml-3 rounded outline-none"
      />
      <button
        type="button"
        onClick={toggleShowPassword}
        className="absolute right-3"
      >
        {isShowPassword ? <FaEyeSlash className="text-slate-600" /> : <FaEye className="text-slate-600" />}
      </button>
    </div>
  );
};

export default PasswordInput;