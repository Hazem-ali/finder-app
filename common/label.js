import React from "react";

export default function Label({
  text,
  bg = "bg-gray-300",
  textColor = "text-black",
  ...rest
}) {
  return (
    <div
      className={`w-fit rounded-lg px-3 py-1  shadow-md ${bg} ${textColor}`}
      {...rest}
    >
      <p className="text-sm">{text}</p>
    </div>
  );
}
