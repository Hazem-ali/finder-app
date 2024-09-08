import React from "react";

export default function Label({
  text,
  bg = "bg-gray-300",
  textColor = "text-black",
}) {
  return (
    <div className={`w-fit rounded-lg shadow-md px-3 py-1 ${bg} ${textColor}`}>
      <p className="text-sm">{text}</p>
    </div>
  );
}
