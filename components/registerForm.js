"use client";
import Input from "../common/input";
import { useState } from "react";
import auth from "@/services/authService";
import { useRouter } from "next/navigation";
import Button from "../common/button";
import Select from "../common/select";
import { registerSchema } from "@/validations/registerSchema";
import DatePicker from "@/common/datePicker";
import { GENDERS } from "@/constants/config";

const RegisterForm = () => {
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [password_confirm, setPasswordConfirm] = useState();
  const [dob, setDateOfBirth] = useState();
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const registerHandler = async () => {
    setErrors({});
    const data = {
      first_name,
      last_name,
      dob,
      phone,
      email,
      gender,
      password,
      password_confirm,
    };

    console.log(dob);
    const validationResult = registerSchema.validate(data, {
      abortEarly: false,
    });

    console.log(validationResult);
    if (validationResult.error) {
      const errorMessages = {};
      validationResult.error.details.forEach((err) => {
        errorMessages[err.context.key] = err.message;
      });
      setErrors(errorMessages);
      return;
    }

    try {
      const response = await auth.register(data);
      console.log("Showing Response", response);
      // TODO use redux to store user data
      const token = response.data.access;
      auth.setToken(token);
      router.push("/home");
    } catch (error) {
      console.log("error", error);
      if (error.response.data) {
        const errorMessages = {};
        for (const [key, value] of Object.entries(error.response.data)) {
          errorMessages[key] = value;
        }
        setErrors(errorMessages);
      } else {
        alert(error);
      }
    }

    return;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="mx-4 grid grid-cols-1 justify-items-center gap-4">
        <Input
          type="text"
          name="register-first-name"
          id="register-first-name"
          placeholder="First Name"
          required={true}
          onChange={(e) => setFirstName(e.target.value)}
          error={errors.first_name}
        />
        <Input
          type="text"
          name="register-last-name"
          id="register-last-name"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          error={errors.last_name}
        />

        <DatePicker
          placeholder="Date Of Birth"
          changeHandler={setDateOfBirth}
          format="Y-m-d"
          error={errors.dob}
        />

        <Select
          options={GENDERS}
          onSelect={(item) => setGender(item)}
          name="Select Gender"
          error={errors.gender}
        />
        <Input
          type="email"
          name="register-email"
          id="register-email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        <Input
          type="text"
          name="register-phone"
          id="register-phone"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
          error={errors.phone}
        />
        <Input
          type="password"
          name="register-password"
          id="register-password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
        <Input
          type="password"
          name="register-confirm-password"
          id="register-confirm-password"
          placeholder="Confirm Password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          error={errors.password_confirm}
        />
        <Button text="Register" onClick={registerHandler} />
      </div>
    </div>
  );
};

export default RegisterForm;
