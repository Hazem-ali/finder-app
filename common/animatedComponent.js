"use client";
import { useInView } from "react-intersection-observer";

const AnimatedComponent = ({
  children,
  animationClasses = "",
  defaultAnimation = "-translate-x-40 opacity-0",
  reverse = false,
  triggerOnce=false,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: triggerOnce,
    threshold: 0.3,
  });
  const computedAnimation = reverse ? `-${defaultAnimation}` : defaultAnimation;
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        inView ? animationClasses : computedAnimation
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;
