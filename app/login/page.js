import LoginForm from "../../components/loginForm";
import Divider from "@/common/divider";
import GradientBackground from "../../common/gradientBackground";
import Button from "../../common/button";
import btnStyles from "@/styles/global/button.module.css";
export default function Signin() {
  return (
    <div>
      <GradientBackground gradientStyle="linear-gradient(45deg, rgba(5,3,80,1) 0%, rgba(32,0,64,1) 50%, rgba(0,0,0,1) 100%)">
        <div className="m-20 flex w-5/6 flex-col">
          <div className="flex flex-col text-center">
            <h1 className="mb-10 select-none text-2xl font-bold text-white">
              Sign in
            </h1>
            <LoginForm />
            <Divider text="OR"></Divider>
            <h1 className="mb-10 select-none text-2xl font-bold text-white">
              Create a new account
            </h1>
            <Button
              text="Register"
              href="/register"
              customClasses={`w-full grid ${btnStyles.btn} ${btnStyles.bgRed}`}
            />
          </div>
        </div>
      </GradientBackground>
    </div>
  );
}
