"use client";
import React from "react";
import { LogoFacebook } from "react-ionicons";

const SocialIcons = ({ Icons = [] }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="mx-1.5 inline-flex cursor-pointer items-center rounded-full bg-gray-700 p-2 text-xl duration-300 hover:bg-teal-500 hover:text-gray-100"
        >
          <LogoFacebook color="#ff6ff6" />
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
