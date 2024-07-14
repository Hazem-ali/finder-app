import React from "react";

const Backdrop = ({ show, onClick }) => {
  return (
    <div
      className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
        show ? "opacity-50" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClick}
    />
  );
};

export default Backdrop;
