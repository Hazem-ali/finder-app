"use client";
import { useState } from "react";
import styles from "../styles/global/button.module.css";
import Input from "../common/input";
import auth from "@/services/authService";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter()
  const handleLogin = async () => {
    const data = {
      email:"mofty@x.com",
      password:"123",
    };

    const response = await auth.login(data)

    console.log("Showing Response");
    console.log(response);
    if (response.status == 200) {
      sessionStorage.setItem("data","login success")
      router.push('/message')
      
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
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
          changeHandler={setPassword}
        />

        <button
          className={`${styles.btn} ${styles.bgPrimary} w-3/12`}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
