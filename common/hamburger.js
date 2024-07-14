import React from "react";

const barStyle =
  "bg-[#dda046] w-full rounded-lg h-1 transition-all duration-300";

const Hamburger = ({ isOpen, onClick }) => {
  const topBarAnimation = `${isOpen ? "rotate-45 translate-y-2.5" : ""}`;
  const middleBarAnimation = `${isOpen ? "opacity-0" : ""}`;
  const bottomBarAnimation = `${isOpen ? "-rotate-45 -translate-y-3" : ""}`;

  return (
    <div className="md:hidden">
      <span
        className="flex flex-col justify-around mx-2 w-7 h-8 cursor-pointer"
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
