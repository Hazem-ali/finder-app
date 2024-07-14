"use client";
import HeroBackground from "../../common/heroBackground";
import { appName } from "@/constants/appConstants";
import styles from "../../styles/global/button.module.css";
import Navbar from "../../common/navbar";
export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="mb-20">
        <Navbar />
      </div>
      <HeroBackground imgSrc="/images/lens.jpg" hasOverlay={true}>
        <div className="flex  md:flex-row flex-col text-center  w-4/6 justify-center ">
          <div>
            <h1 className="text-white font-bold text-7xl m-10">
              {appName}: Reuniting people
            </h1>
            <h1 className="text-white text-3xl m-10">
              Our goal is to bring peace of mind by
              <p className="font-bold">
                reuniting lost loved ones with their families.
              </p>
            </h1>
            <button
              className={`text-black z-20 ${styles.bgPrimary} ${styles.bigButton}`}
              onClick={() => {}}
            >
              Get Started
            </button>
          </div>
        </div>
      </HeroBackground>
    </div>
  );
}
