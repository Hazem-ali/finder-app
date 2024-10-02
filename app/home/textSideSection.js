import React from "react";

export default function TextSideSection({ title, details }) {
  return (
    <div className="m-8 flex flex-col items-center text-white justify-center md:items-start md:text-start text-center">
      <h1 className="text-5xl font-bold "> {title} </h1>
      <h1 className="my-10 text-2xl">{details}</h1>
    </div>
  );
}
