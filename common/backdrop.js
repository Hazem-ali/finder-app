import React from "react";

const Backdrop = ({ show, onClick }) => {
  return (
    <div
      className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
        show ? "opacity-50" : "pointer-events-none opacity-0"
      }`}
      onClick={onClick}
    />
  );
};

export default Backdrop;
