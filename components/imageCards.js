import React from "react";
import ImageCard from "./imageCard/imageCard";

const ImageCards = ({ cards }) => {
  return (
    <div className=" m-8 grid md:grid-cols-4 grid-cols-1 gap-8 items-center justify-items-center ">
      {cards.map((card) => (
        <ImageCard key={card.id} imgSrc={card.imgSrc}>
          <h1 className="text-xl font-bold mb-2">{card.title}</h1>
          <p className="">{card.description}</p>
          {/* <div class="space-x-4 mt-4"></div> */}
        </ImageCard>
      ))}
    </div>
  );
};

export default ImageCards;
