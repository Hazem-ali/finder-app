import Image from "next/image";
import React from "react";

export default function ImageSideSection({ image }) {
  return (
    <div className="relative h-96 w-96  overflow-hidden rounded-2xl shadow-xl shadow-stone-700 ">
      <Image
        src={image}
        alt="Image"
        fill
        style={{ objectFit: "cover" }}
        priority
        unoptimized
      />
    </div>
  );
}
