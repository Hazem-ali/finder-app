import React from "react";

const Card = ({ width = "w-1/3", height = "h-96", children }) => {
  return (
    <div className={`${width} ${height} min-w-96 flex flex-col rounded-xl overflow-hidden shadow-lg relative`}>
      {children}
    </div>
  );
};

export default Card;
