import React from "react";


const heroBackgroundStyle = `
    relative bg-no-repeat bg-cover
    w-full min-h-screen
    flex justify-center 
    z-10 
`;
const GradientBackground = ({ gradientStyle, children }) => {
  const backgroundStyle = {
    background: gradientStyle,
  };

  return (
    <div
      className={`${heroBackgroundStyle}`}
      style={backgroundStyle}
    >
      {children}
    </div>
  );
};

export default GradientBackground;
