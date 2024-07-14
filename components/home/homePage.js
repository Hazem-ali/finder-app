import React, { useEffect, useState } from "react";
import HeroBackground from "../../common/heroBackground";

import heroImg from "../../images/hero.jpg";
import blurImg from "../../images/blur.jpg";
import lensImg from "../../images/lens.jpg";
import lens_blueImg from "../../images/lens_blue.jpg";
import saleImg from "../../images/sale.jpg";
import watchImg from "../../images/watch.jpg";
import sweetsImg from "../../images/sweets.jpg";
import laptopImg from "../../images/laptop.jpg";
import juiceImg from "../../images/juice.jpg";
import makeupImg from "../../images/makeup.jpg";
import cameraImg from "../../images/camera.jpg";
import dietImg from "../../images/diet.jpg";
import ImageCards from "../imageCards";
import ItemCards from "../itemCards";

const HomePage = () => {
  const [cards, setCards] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setCards([
      {
        id: 1,
        imgSrc: saleImg,
        title: "Sale",
        description: "Have a look to our huge sale on all items",
      },
      {
        id: 2,
        imgSrc: watchImg,
        title: "Fashion",
        description: "Find out our latest fashion collections",
      },
      {
        id: 3,
        imgSrc: sweetsImg,
        title: "Sweets",
        description: "Explore our new chocolate and sweets",
      },
      {
        id: 4,
        imgSrc: laptopImg,
        title: "Electronics",
        description: "Latest electronic devices are here!",
      },
    ]);
    setItems([
      {
        id: 1,
        imgSrc: juiceImg,
        title: "Ice Cream",
        brand: "Sultana",
        price: "19",
        old_price: "49",
        liked: true,
      },
      {
        id: 2,
        imgSrc: makeupImg,
        title: "Makeup",
        brand: "De Facto",
        price: "149",
        old_price: "969",
        liked: false,
      },
      {
        id: 3,
        imgSrc: cameraImg,
        title: "Professional Camera",
        brand: "Carl Zeiss",
        price: "1200",
        old_price: "7560",
        liked: true,
      },
      {
        id: 4,
        imgSrc: dietImg,
        title: "Diet food",
        brand: "Cinnabon",
        price: "149",
        liked: true,
      },
    ]);
  }, []);
  
  const likeHandler = (item) => {
    const newItems = [...items];
    const index = newItems.indexOf(item);
    newItems[index].liked = !newItems[index].liked;
    setItems(newItems);
    console.log(items[index]);
  };
  
  const onAddToCartHandler = (item) => {
    console.log("Added to cart => ", item.title);
    return;
  };

  return (
    <div>
      <HeroBackground imgSrc={heroImg} hasOverlay={true}>
        <div className="text-white text-center">
          <h1 className="font-bold text-6xl m-6">Welcome to our website</h1>
          <p className="text-3xl">
            this is the first look of our professional website
          </p>
        </div>
      </HeroBackground>

      <ImageCards cards={cards} />

      <ItemCards
        items={items}
        onLike={likeHandler}
        onAddToCart={onAddToCartHandler}
      />

      <HeroBackground imgSrc={lens_blueImg} hasOverlay={true} />
      <HeroBackground imgSrc={blurImg} hasOverlay={true}>
        <div className="text-white text-center">
          <h1 className="font-bold text-6xl m-6">Welcome to our website</h1>
          <p className="text-3xl">
            this is the first look of our professional website
          </p>
        </div>
      </HeroBackground>
      <HeroBackground imgSrc={lensImg} hasOverlay={false} />
    </div>
  );
};

export default HomePage;
