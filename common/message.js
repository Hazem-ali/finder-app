import React from "react";

const Message = ({ type, children }) => {
  const msgStyles = {
    success: "bg-success",
    error: "bg-error",
  };
  return (
    <div
      className={`mt-2 text-xs font-bold text-white ${msgStyles[type]} max-w-80 rounded-full px-4 py-1`}
    >
      {children}
    </div>
  );
};

export default Message;
