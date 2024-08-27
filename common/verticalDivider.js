import React from "react";

const VerticalDivider = ({ text }) => {
  return (
    <div className="mx-8 flex items-center justify-center">
      <div className="flex h-screen items-center">
        <div className="w-1 flex-grow bg-gradient-to-b from-transparent to-sky-400"></div>
        {text && (
          <span className="mx-4 select-none bg-transparent font-bold text-white">
            {text}
          </span>
        )}
        <div className="w-1 flex-grow bg-gradient-to-b from-sky-400 to-transparent"></div>
      </div>
    </div>
  );
};

export default VerticalDivider;
