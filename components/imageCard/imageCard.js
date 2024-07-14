import React from "react";

const ImageCard = ({ children, imgSrc, ...rest }) => {
  const divStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      {...rest}
      className="relative w-full h-96 overflow-hidden rounded-2xl shadow-lg group"
    >
      <div
        className="absolute inset-0 transition-transform group-hover:scale-110"
        style={divStyle}
      ></div>
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="p-4 text-white">{children}</div>
      </div>
    </div>
  );
};

export default ImageCard;
