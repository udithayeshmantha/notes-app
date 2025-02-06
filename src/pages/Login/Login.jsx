import React from "react";
import Navbar from "../../components/Navbar/Navbar";1
import { Link } from "react-router-dom";
import PasswordInput from "../../components/passwordinput";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 p-10 bg-white shadow-lg rounded-lg">
        <form onSubmit={() => {}}>
          <h4 className="text-2xl mb-7">Login</h4>
          <input type="text" placeholder="Email" className="input-box" />
          <PasswordInput />
          <button type="submit" className="btn-primary">
            Login
          </button>
          <p className="text-sm text-center mt-4">
            Not registered yet?{" "}
            <Link to="/signup" className="font">
              Create an Account
            </Link>
          </p>
        </form>
      </div>
      </div>
    </>
  )
};

export default Login;
