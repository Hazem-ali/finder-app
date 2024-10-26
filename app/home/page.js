import HeroBackground from "../../common/heroBackground";
import { APP_NAME } from "@/constants/config";
import AnimatedComponent from "../../common/animatedComponent";
import TextSideSection from "./textSideSection";
import ImageSideSection from "./imageSideSection";
import AnimatedSection from "./animatedSection";
import GradientBackground from "@/common/gradientBackground";
import BulletPointsSection from "./bulletPointsSection";
import MainHomeButton from "./mainHomeButton";

export default function Home() {
  return (
    <div>
      <HeroBackground imgSrc="/images/lens.jpg" hasOverlay>
        <div className="flex h-full w-full flex-col items-center justify-center text-center md:flex-row">
          <div className="flex flex-col items-center">
            <AnimatedComponent triggerOnce animationClasses="animate-bottom-up">
              <h1 className="m-10 text-7xl font-bold text-white">
                {APP_NAME}: Reuniting people
              </h1>
              <h2 className="m-10 text-3xl text-white">
                Our goal is to bring peace of mind by
                <p className="font-bold">
                  connecting lost loved ones with their families.
                </p>
              </h2>
            </AnimatedComponent>
            <MainHomeButton />
          </div>
        </div>
      </HeroBackground>
      <GradientBackground gradientStyle="radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)">
        <div className="flex flex-col justify-between gap-10">
          <AnimatedSection
            left={
              <TextSideSection
                title="Instantly find people"
                details="Use AI power to find missing people by image in just a few seconds..."
              />
            }
            right={<ImageSideSection image="/images/face-recognition.jpg" />}
          />

          <AnimatedSection
            left={<ImageSideSection image="/images/keyboard.jpeg" />}
            right={
              <TextSideSection
                title="No image yet? it's okay"
                details="Search using name or national ID of a contact or even his parents or children "
              />
            }
          />
          <BulletPointsSection />
        </div>
      </GradientBackground>
    </div>
  );
}
