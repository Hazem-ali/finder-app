// icon:bx-check-circle | Boxicons https://boxicons.com/ | Atisa
import React from "react";
function SuccessIcon({ color = "green", ...rest }) {
  return (
    <div className="p-2">
      <svg
        fill={color}
        viewBox="0 0 24 24"
        height="3rem"
        width="3rem"
        {...rest}
      >
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413l-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z" />
      </svg>
    </div>
  );
}

export default SuccessIcon;
