import HeroBackground from "../../common/heroBackground";
import { APP_NAME } from "@/constants/config";
import styles from "../../styles/global/button.module.css";
import Button from "@/common/button";
import ProtectedComponent from "../../common/protectedComponent";
export default function Home() {
  return (
    <div>
      <HeroBackground imgSrc="/images/lens.jpg" hasOverlay={true}>
        <div className="flex w-4/6 flex-col items-center justify-center text-center md:flex-row">
          <div>
            <h1 className="m-10 text-7xl font-bold text-white">
              {APP_NAME}: Reuniting people
            </h1>
            <h2 className="m-10 text-3xl text-white">
              Our goal is to bring peace of mind by
              <p className="font-bold">
                connecting lost loved ones with their families.
              </p>
            </h2>

            <ProtectedComponent
              component={
                <Button
                  text="Your Added Contacts"
                  className={`z-20 ${styles.bgRed} ${styles.bigButton}`}
                  href="/contacts"
                />
              }
              fallback={
                <Button
                  text="Get Started"
                  className={`z-20 ${styles.bgRed} ${styles.bigButton}`}
                  href="/login"
                />
              }
            />
          </div>
        </div>
      </HeroBackground>
      <HeroBackground imgSrc="/images/lens.jpg" hasOverlay={true}>
        <div className="flex w-4/6 flex-col items-center justify-center text-center md:flex-row">
          <div>
            <h1 className="m-10 text-7xl font-bold text-white">
              {APP_NAME}: Reuniting people
            </h1>
            <h1 className="m-10 text-3xl text-white">
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
