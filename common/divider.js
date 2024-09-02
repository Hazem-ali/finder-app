import React from "react";

const Divider = ({ text }) => {
  return (
    <div className="my-4 flex items-center justify-center">
      <div className="flex w-screen items-center">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-sky-400"></div>
        {text && (
          <span className="mx-4 select-none bg-transparent font-bold text-white">
            {text}
          </span>
        )}
        <div className="h-px flex-grow bg-gradient-to-r from-sky-400 to-transparent"></div>
      </div>
    </div>
  );
};

export default Divider;
