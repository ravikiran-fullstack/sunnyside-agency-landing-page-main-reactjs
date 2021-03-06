import React, { useState, useRef, useEffect } from "react";

const Header = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target) // this is to see if the click happened anywhere outside the dropdown menu
      ) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  const toggleMenuIcon = (e) => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header className="headerDesktop">
        <ul>
          <li className="homeTab">
            <a href="#home">sunnyside</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li className="contactsTab">
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </header>
      <header className="headerMobile">
        <div className="homeTabMobile">
          <a href="#home">sunnyside</a>
        </div>
        {/* <div className="dropdownMenu" onClick={onClick}>
          {dropDownOpen && <div className="dropdownUl">
            <div className="mobileTab"><a href="#about">About</a></div>
            <div className="mobileTab"><a href="#services">Services</a></div>
            <div className="mobileTab"><a href="#projects">Projects</a></div>
            <div className="mobileTab"><a href="#contacts">Contacts</a></div>
          </div>}
        </div> */}

        <div className="menu-container">
          <div onClick={toggleMenuIcon} className="menu-trigger"></div>
          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contacts">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
