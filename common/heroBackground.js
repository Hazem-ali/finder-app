import React from "react";

const heroOverlayStyle = `
    before:absolute
    before:top-0 before:left-0 before:w-full before:h-full before:content-['']
    before:bg-black before:opacity-50 before:-z-10 
  `;

const heroBackgroundStyle = `
    relative bg-no-repeat bg-cover
    w-full h-screen 
    flex justify-center items-center
    z-10 
`;
const HeroBackground = ({ imgSrc, hasOverlay, children }) => {
  const imgStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundPosition: "bottom center",
  };

  return (
    <div
      className={`${hasOverlay && heroOverlayStyle} ${heroBackgroundStyle}`}
      style={imgStyle}
    >
      {children}
    </div>
  );
};

export default HeroBackground;
