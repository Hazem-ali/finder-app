'use client'
import { useEffect, useState } from "react";
import "../styles/global/input.css";
import styles from "../styles/global/button.module.css";
import Input from "../common/input";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
      <div className="grid grid-cols-1 gap-4 mx-4 justify-items-center  ">
        <Input
          type="email"
          name="login-email"
          id="login-email"
          placeholder="Email Address"
          changeHandler={setEmail}
        />
        <Input
          type="password"
          name="login-password"
          id="login-password"
          placeholder="Password"
          className="input"
          changeHandler={setPassword}
        />

        <button
          className={`${styles.btn} ${styles.bgPrimary} w-3/12`}
          onClick={() => {
            console.log(email);
            console.log(password);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
