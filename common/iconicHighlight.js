import React from "react";
import AnimatedComponent from "./animatedComponent";
import Image from "next/image";

export default function IconicHighlight({ image, title, details }) {
  return (
    <div className="flex flex-col items-center">
      <AnimatedComponent defaultAnimation="translate-y-20 opacity-0" triggerOnce>
        <div className="relative h-40 w-40 overflow-hidden rounded-full">
          <Image
            src={image}
            alt={`Image `}
            fill
            style={{ objectFit: "cover" }}
            priority
            unoptimized
          />
        </div>
      </AnimatedComponent>
      <h1 className="mt-5 text-lg font-bold text-white">{title}</h1>
      <h1 className="mt-2 max-w-48 text-sm text-white">{details}</h1>
    </div>
  );
}
