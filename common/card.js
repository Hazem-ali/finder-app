import React from "react";


/**
 * @author Hazem Ali
 * @type Component
 * @description Creates a div with a shadow style and flex column applied  
 */
const Card = ({
  width = "w-1/3",
  height = "h-96",
  className,
  customClasses,
  children,
  ...rest
}) => {
  return (
    <div
    className={
      className ||
      `${width} ${height} flex flex-col rounded-xl overflow-hidden shadow-lg relative ${customClasses}`
    }
    {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
