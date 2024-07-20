"use client";
import Divider from "@/common/divider";
import GradientBackground from "../../common/gradientBackground";
import RegisterForm from "@/components/registerForm";
import Button from "@/common/button";
import btnStyles from "@/styles/global/button.module.css";
export default function Register() {
  return (
    <div>
      <GradientBackground gradientStyle="linear-gradient(135deg, #200040 2%,#200040 2%,#000000 13%,#200040 84%,#050350 100%)">
        <div className="flex flex-col w-5/6 m-20">
          <div className="flex flex-col text-center ">
            <h1 className="text-white font-bold text-2xl mb-10 select-none">
              Register here
            </h1>
            <RegisterForm />
            <Divider text="OR"></Divider>
            <h1 className="text-white font-bold text-2xl mb-10 select-none">
              Already have an account?
            </h1>
            <Button text="Login" href="/login" bg={btnStyles.bgRed} />
          </div>
        </div>
      </GradientBackground>
    </div>
  );
}
