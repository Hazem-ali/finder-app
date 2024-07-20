"use client";
import Input from "../common/input";
import { useState } from "react";
import auth from "@/services/authService";
import { useRouter } from "next/navigation";
import Button from "../common/button";
import Select from "../common/select";
const RegisterForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [password_confirm, setPasswordConfirm] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();

  const router = useRouter();

  const registerHandler = async () => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      dob: dateOfBirth,
      phone,
      email,
      gender,
      password,
      password_confirm,
    };
    try {
      const response = await auth.register(data);
      console.log("Showing Response");
      console.log(response);
      // TODO use redux to store user data
      const token = response.data.access;
      auth.setToken(token);
      router.push("/home");
    } catch (error) {
      console.log(error.response.data);
    }

    return;
  };

  return (
    <div className="flex flex-col  gap-4  justify-center items-center ">
      <div className="grid grid-cols-1 gap-4 mx-4 justify-items-center">
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
          type="text"
          name="register-dob"
          id="register-dob"
          placeholder="Date Of Birth"
          value="2015-03-25"
          changeHandler={setDateOfBirth}
        />

        <Select
          options={[
            { name: "Male", value: "m" },
            { name: "Female", value: "f" },
          ]}
          onSelect={(item) => setGender(item)}
          name="Select Gender"
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
          placeholder="Phone Number"
          changeHandler={setPhone}
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
          changeHandler={setPasswordConfirm}
        />
        <Button text="Register" onClick={registerHandler} />
      </div>
    </div>
  );
};

export default RegisterForm;
