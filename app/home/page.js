
import HeroBackground from "../../common/heroBackground";
import { APP_NAME } from "@/constants/config";
import styles from "../../styles/global/button.module.css";
import Button from "@/common/button";
export default function Home() {
  return (
    <div>
      <HeroBackground imgSrc="/images/lens.jpg" hasOverlay={true}>
        <div className="flex  md:flex-row flex-col text-center  w-4/6 justify-center items-center  ">
          <div>
            <h1 className="text-white font-bold text-7xl m-10">
              {APP_NAME}: Reuniting people
            </h1>
            <h1 className="text-white text-3xl m-10">
              Our goal is to bring peace of mind by
              <p className="font-bold">
                connecting lost loved ones with their families.
              </p>
            </h1>
            <Button
              text="Get Started"
              customClasses={`z-20 ${styles.bgRed} ${styles.bigButton}`}
              href="/login"
            />
          </div>
        </div>
      </HeroBackground>
      <HeroBackground imgSrc="/images/lens.jpg" hasOverlay={true}>
        <div className="flex  md:flex-row flex-col text-center  w-4/6 justify-center items-center  ">
          <div>
            <h1 className="text-white font-bold text-7xl m-10">
              {APP_NAME}: Reuniting people
            </h1>
            <h1 className="text-white text-3xl m-10">
              Our goal is to bring peace of mind by
              <p className="font-bold">
                reuniting lost loved ones with their families.
              </p>
            </h1>
            <Button
              text="Get Started"
              customClasses={`z-20 ${styles.bgRed} ${styles.bigButton}`}
              href="/login"
            />
          </div>
        </div>
      </HeroBackground>
    </div>
  );
}
