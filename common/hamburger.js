import React from "react";

const barStyle = "bg-white w-full rounded-lg h-1 transition-all duration-300";

const Hamburger = ({ isOpen, onClick }) => {
  const topBarAnimation = `${isOpen ? "rotate-45 translate-y-2.5" : ""}`;
  const middleBarAnimation = `${isOpen ? "opacity-0" : ""}`;
  const bottomBarAnimation = `${isOpen ? "-rotate-45 -translate-y-3" : ""}`;

  return (
    <div className="md:hidden">
      <span
        className="mx-2 flex h-8 w-7 cursor-pointer flex-col justify-around"
        onClick={onClick}
      >
        <div className={`${barStyle} ${topBarAnimation}`} />
        <div className={`${barStyle} ${middleBarAnimation}`} />
        <div className={`${barStyle} ${bottomBarAnimation}`} />
      </span>
    </div>
  );
};

export default Hamburger;
