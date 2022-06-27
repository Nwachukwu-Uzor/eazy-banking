import React, { useState } from "react";

import logo from "../../assets/logo.svg";

import styles from "./nav.module.scss";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleOpenNav = () => setNavOpen((open) => !open);
  return (
    <header
      className={`py-2 md:py-3.5 relative bg-white shadow-md z-50 ${styles.header} flex items-center`}
    >
      <nav
        className={`flex flex-col md:flex-row md:justify-between items-center w-full mx-auto`}
      >
        <div className="flex justify-between items-center w-full py-2 md:py-0 px-4 md:w-auto">
          <img src={logo} alt="eazy banking" />
          <div onClick={handleOpenNav} className={`md:hidden`}>
            {navOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
        </div>
        <div
          className={`${styles.subMenu} ${
            navOpen && styles.open
          } text-white md:text-gray-500 w-full py-4 text-center md:text-left md:py-0 flex flex-col md:flex-row md:gap-3 items-center`}
        >
          <div
            className={`flex flex-col md:flex-row justify-between md:w-3/5 mx-auto hover:opacity-75`}
          >
            <a href="#" className={`mb-2 md:mb-0 hover:opacity-75`}>
              Home
            </a>
            <a href="#" className={`mb-2 md:mb-0 hover:opacity-75`}>
              About
            </a>
            <a href="#" className={`mb-2 md:mb-0 hover:opacity-75`}>
              Contact
            </a>
            <a href="#" className={`mb-2 md:mb-0 hover:opacity-75`}>
              Blog
            </a>
            <a href="#" className={`mb-2 md:mb-0 md:mx-5 hover:opacity-75`}>
              Careers
            </a>
          </div>
          <div className={`my-4 md:my-0`}>
            <a
              href="#"
              className={`${styles.subButton} py-1.5 px-4 rounded-3xl text-white md:w-auto hover:opacity-75`}
            >
              Request Invite
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
