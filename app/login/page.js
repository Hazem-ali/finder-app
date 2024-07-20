import LoginForm from "../../components/loginForm";
import Divider from "@/common/divider";
import GradientBackground from "../../common/gradientBackground";
import Button from '../../common/button';
import  btnStyles  from '@/styles/global/button.module.css';
export default function Signin() {
  return (
    <div>
      <GradientBackground gradientStyle="linear-gradient(45deg, rgba(5,3,80,1) 0%, rgba(32,0,64,1) 50%, rgba(0,0,0,1) 100%)">
        <div className="flex flex-col w-5/6 m-20">
          <div className="flex flex-col  text-center ">
            <h1 className="text-white font-bold text-2xl mb-10 select-none">
              Sign in
            </h1>
            <LoginForm />
            <Divider text="OR"></Divider>
            <h1 className="text-white font-bold text-2xl mb-10 select-none">
              Create a new account 
            </h1>
            <Button text="Register" href="/register" customClasses={`w-full grid ${btnStyles.btn} ${btnStyles.bgRed}`}/>
          </div>
        </div>
      </GradientBackground>
    </div>
  );
}
