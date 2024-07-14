import React from "react";
import "../styles/global/input.css";
import "../styles/global/button.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx-4 justify-items-center">
        <h1 className="md:col-span-2 text-center drop-shadow-md text-white font-bold text-xl">
          Register easily
        </h1>
        <input
          type="text"
          name="register-first-name"
          id="register-first-name"
          placeholder="First Name"
          className="input "
        />
        <input
          type="text"
          name="register-last-name"
          id="register-last-name"
          placeholder="Last Name"
          className="input "
        />
        <input
          type="email"
          name="register-email"
          id="register-email"
          placeholder="Email Address"
          className="input "
        />
        <input
          type="text"
          name="register-phone"
          id="register-phone"
          placeholder="Mobile Number"
          className="input"
        />
        <input
          type="password"
          name="register-password"
          id="register-password"
          placeholder="Password"
          className="input"
        />
        <input
          type="password"
          name="register-confirm-password"
          id="register-confirm-password"
          placeholder="Confirm Password"
          className="input"
        />
        <button
          className="btn bg-primary w-3/12 md:col-span-2 "
          onClick={() => {
            navigate("/login", { state: { name: "hazem ali" } });
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
