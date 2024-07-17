import Divider from "@/common/divider";
import styles from "@/styles/global/button.module.css";
import GradientBackground from "../../common/gradientBackground";
import RegisterForm from "@/components/registerForm";
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

            <button className={`${styles.btn} ${styles.bgPrimary} w-3/12`} >
              Login
            </button>
          </div>
        </div>
      </GradientBackground>
    </div>
  );
}
