import React from "react";

const Message = ({ type, children }) => {
  const msgStyles = {
    success: "bg-success",
    error: "bg-error",
  };
  return (
    <div
      className={`text-white text-xs font-bold mt-2 ${msgStyles[type]} rounded-full max-w-80 px-4 py-1 `}
    >
      {children}
    </div>
  );
};

export default Message;
