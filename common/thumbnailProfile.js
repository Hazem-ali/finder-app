import { PLACEHOLDER_IMAGE } from "@/constants/config";
import Image from "next/image";
import React from "react";

export default function ThumbnailProfile({ title, image, details, onClick }) {
  return (
    <div
      className="flex h-32 mx-2 cursor-pointer flex-col items-center justify-center rounded-2xl duration-300 hover:scale-110 "
      onClick={onClick}
    >
      {title && <p className="text-lg font-bold">{title}</p>}
      <Image
        src={image || PLACEHOLDER_IMAGE}
        alt="image"
        width={60}
        height={60}
        style={{ objectFit: "cover" }}
        priority
        unoptimized
        className="h-16 w-16 select-none rounded-full"
      />
      <h1 className="text-wrap px-2">{details}</h1>
    </div>
  );
}
