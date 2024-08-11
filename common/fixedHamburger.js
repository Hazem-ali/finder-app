import React from "react";

const barStyle = "bg-[#dda046] w-full rounded-lg h-1";
const Hamburger = ({ onClick }) => {
  return (
    <div className="md:hidden">
      <span
        className="mx-2 flex h-7 w-7 cursor-pointer flex-col justify-around"
        onClick={onClick}
      >
        <div className={barStyle}></div>
        <div className={barStyle}></div>
        <div className={barStyle}></div>
      </span>
    </div>
  );
};

export default Hamburger;
