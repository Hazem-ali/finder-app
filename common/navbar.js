"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/global/button.module.css";
import Backdrop from "./backdrop";
import Hamburger from "./hamburger";

import useScrollPosition from "../components/hooks/useScrollPosition";

const SCROLL_THRESHOLD = 300;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navScrollTheme, setNavScrollTheme] = useState();
  const [navHeight, setNavHeight] = useState();
  const scrollPosition = useScrollPosition();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isScrolledOverThreshold = useCallback(
    (threshold) => {
      return scrollPosition > threshold;
    },
    [scrollPosition]
  );

  const modifyNavOnScroll = useCallback(() => {
    if (isScrolledOverThreshold(SCROLL_THRESHOLD)) {
      // Scrolled, then modify nav
      setNavScrollTheme("bg-[#e7cabb] text-black");
      setNavHeight("h-16");
    } else {
      setNavScrollTheme("bg-red-100 text-black");
      setNavHeight("h-20");
    }
  }, [isScrolledOverThreshold]);

  useEffect(() => {
    modifyNavOnScroll();
  }, [modifyNavOnScroll]);

  return (
    <header className="">
      <Backdrop show={isMenuOpen} onClick={toggleMenu} />
      <nav
        className={`${navScrollTheme} flex w-full ${navHeight} fixed justify-between items-center py-2 px-6 duration-300 shadow-xl z-50 transition-all transform-gpu`}
      >
        <div className="flex items-center justify-center z-20">
          {/* hamburger menu */}
          <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} />

          {/* icon */}
          <div>
            <a href="/login" className="w-7 inline">
              <img className="w-8 mx-2" src="/images/cd.png" alt="icon" />
            </a>
          </div>
        </div>

        <div
          className={`${navScrollTheme} transition-all duration-300 md:static absolute md:shadow-none shadow-xl md:h-fit h-[40vh] md:w-fit w-full flex items-center justify-center z-10 left-0 ${
            isMenuOpen ? "top-[99%] " : "top-[-60vh]"
          }`}
        >
          <ul
            className={`  flex md:flex-row flex-col items-center md:gap-9 gap-8 `}
          >
            <li
              className={` hover:scale-105 transition-transform `}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={` hover:scale-105 transition-transform `}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/register">Customers</Link>
            </li>
            <li
              className={` hover:scale-105 transition-transform `}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/register">Start Hosting</Link>
            </li>
          </ul>
        </div>

        <button
          className={`text-black z-20 ${styles.bgCompBrown} ${styles.btn}`}
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
