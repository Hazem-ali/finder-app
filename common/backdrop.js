import React from "react";

const Backdrop = ({ show, onClick, children }) => {
  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center transition-all duration-300 ${
        show ? "visible bg-black/50" : "invisible"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Backdrop;
