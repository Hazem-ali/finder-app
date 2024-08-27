"use client";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import useScrollPosition from "@/hooks/useScrollPosition";
import btnStyles from "@/styles/global/button.module.css";
import auth from "@/services/authService";
import { SCROLL_THRESHOLD } from "@/constants/config";
import Backdrop from "../backdrop";
import Hamburger from "../hamburger";
import Button from "../button";
import navStyles from "./navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navScrollTheme, setNavScrollTheme] = useState();
  const [navHeight, setNavHeight] = useState();
  const scrollPosition = useScrollPosition();
  const router = useRouter();
  const pathName = usePathname();

  const handleLogout = () => {
    auth.logout();
    setIsLoggedIn(false);
    setIsMenuOpen(false);
    router.refresh();
  };

  const handleListItem = () => {
    setIsMenuOpen(false);
    scrollTo(0, 0);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isScrolledOverThreshold = useCallback(
    (threshold) => scrollPosition > threshold,
    [scrollPosition]
  );

  const modifyNavOnScroll = useCallback(() => {
    if (isScrolledOverThreshold(SCROLL_THRESHOLD)) {
      // Scrolled, then modify nav
      setNavScrollTheme("bg-jeansBlue text-white");
      setNavHeight("h-16");
    } else {
      setNavScrollTheme("bg-darkBlue text-white");
      setNavHeight("h-20");
    }
  }, [isScrolledOverThreshold]);

  useEffect(() => {
    setIsLoggedIn(auth.isAuthenticated());
    modifyNavOnScroll();
  }, [modifyNavOnScroll, isLoggedIn]);

  return (
    <header className="mb-20">
      <Backdrop show={isMenuOpen} onClick={toggleMenu} />
      <nav className={`${navScrollTheme} ${navHeight} ${navStyles.mainNav}`}>
        <section className="flex items-center justify-center z-20">
          {/* hamburger menu */}
          <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} />

          {/* icon */}
          <div>
            <a href="/login" className="w-7 inline">
              <img className="w-8 mx-2" src="/images/cd.png" alt="icon" />
            </a>
          </div>
        </section>

        <section
          className={`${navScrollTheme} ${navStyles.navLinksDiv}
            ${isMenuOpen ? "top-[99%] " : "top-[-60vh]"}`}
        >
          <ul className={navStyles.linkList}>
            <li className={navStyles.linkListItem} onClick={handleListItem}>
              <Link
                className={pathName === "/home" ? navStyles.activeLink : ""}
                href="/home"
              >
                Home
              </Link>
            </li>
            <li className={navStyles.linkListItem} onClick={handleListItem}>
              <Link
                className={pathName === "/login" ? navStyles.activeLink : ""}
                href="/login"
              >
                Login
              </Link>
            </li>
            <li className={navStyles.linkListItem} onClick={handleListItem}>
              <Link
                className={pathName === "/register" ? navStyles.activeLink : ""}
                href="/register"
              >
                Start Hosting
              </Link>
            </li>
          </ul>
        </section>

        {/* TODO isAuthenticated? Logout & profile image else Login */}
        {isLoggedIn ? (
          <Button customClasses={` ${btnStyles.btn}`} text="Logout" href="/home" onClick={handleLogout} />
        ) : (
          <Button
            customClasses={`text-black z-20 ${btnStyles.bgRed} ${btnStyles.btn}`}
            text="Login"
            href="/login"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
