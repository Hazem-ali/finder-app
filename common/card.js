import React from "react";

const Card = ({
  width = "w-1/3",
  height = "h-96",
  customClasses,
  children,
}) => {
  return (
    <div
      className={`${width} ${height}  flex flex-col rounded-xl overflow-hidden shadow-lg relative ${customClasses}`}
    >
      {children}
    </div>
  );
};

export default Card;
