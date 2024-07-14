import React from "react";

const barStyle = "bg-[#dda046] w-full rounded-lg h-1";
const Hamburger = ({ onClick }) => {
  return (
    <div className="md:hidden">
      <span
        className="flex flex-col justify-around mx-2 w-7 h-7 cursor-pointer"
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