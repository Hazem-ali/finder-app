import React from "react";
import AnimatedComponent from "../../common/animatedComponent";

export default function AnimatedSection({ left, right }) {
  return (
    <div className="h-fit w-full p-16 ">
      <div className="flex flex-col items-center gap-5 justify-around md:flex-row">
        <AnimatedComponent>{left}</AnimatedComponent>

        <AnimatedComponent>{right}</AnimatedComponent>
      </div>
    </div>
  );
}
