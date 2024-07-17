"use client";
import buttonStyles from "../styles/global/button.module.css";
import Input from "../common/input";
import { useState } from "react";
import auth from "@/services/authService";
import { useRouter } from "next/navigation";

const RegisterForm = () => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const router = useRouter()


  const registerHandler =  () => {

    const data = {
      first_name: firstName,
      last_name: lastName,
      dob: "2015-03-25",
      email: email,
      phone: mobile,
      password,

    };
    const response = auth.register(data)

    console.log("Showing Response");
    console.log(response);

    if (response.status == 200) {
      router.push('/message', {xyz:"Success"})
      
    }

    return;
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx-4 justify-items-center">
        <Input
          type="text"
          name="register-first-name"
          id="register-first-name"
          placeholder="First Name"
          required={true}
          changeHandler={setFirstName}
        />
        <Input
          type="text"
          name="register-last-name"
          id="register-last-name"
          placeholder="Last Name"
          changeHandler={setLastName}
        />
        <Input
          type="email"
          name="register-email"
          id="register-email"
          placeholder="Email Address"
          changeHandler={setEmail}
        />
        <Input
          type="text"
          name="register-phone"
          id="register-phone"
          placeholder="Mobile Number"
          changeHandler={setMobile}
        />
        <Input
          type="password"
          name="register-password"
          id="register-password"
          placeholder="Password"
          changeHandler={setPassword}
        />
        <Input
          type="password"
          name="register-confirm-password"
          id="register-confirm-password"
          placeholder="Confirm Password"
          changeHandler={setConfirmPassword}
        />
        <button
          className={`${buttonStyles.btn} ${buttonStyles.bgPrimary} w-3/12 grid md:col-span-2`}
          onClick={registerHandler}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
