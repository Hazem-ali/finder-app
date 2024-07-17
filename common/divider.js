import React from "react";

const Divider = ({ text }) => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className=" w-screen flex items-center">
        <div className="flex-grow h-px bg-gradient-to-r from-transparent to-sky-400"></div>
        {text && (
          <span className="mx-4 text-white font-bold bg-transparent select-none">
            {text}
          </span>
        )}
        <div className="flex-grow h-px bg-gradient-to-r from-sky-400 to-transparent"></div>
      </div>
    </div>
  );
};

export default Divider;
