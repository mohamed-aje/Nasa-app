import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from "../../assets/logo.jpeg";
const Navbar = () => {
  const [toggleMenu, setTogglemenu] = useState(false);
  const Menu = () => (
    <>
      <p>
        <a href="#whatnasa">What is Nasa</a>
      </p>
      <p>
        <a href="#pod">Picture of the Day</a>
      </p>
      ∂{" "}
      <p>
        <a href="#library">Library</a>
      </p>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setTogglemenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setTogglemenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container button scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
