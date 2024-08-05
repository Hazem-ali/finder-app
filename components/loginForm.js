"use client";
import { useState } from "react";
import Input from "../common/input";
import auth from "@/services/authService";
import { useRouter } from "next/navigation";
import Button from "../common/button";
import Message from "../common/message";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const response = await auth.login({ email, password });
      auth.setToken(response.data.access);
      auth.setRefreshToken(response.data.refresh);
      router.push("/home");
    } catch (error) {
      console.log(error)
      setErrorMessage("Invalid email or password");
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
        {errorMessage && <Message type="error">{errorMessage}</Message>}
        <Button text="Login" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default LoginForm;
