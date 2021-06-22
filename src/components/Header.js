import React from "react";

const Header = () => {
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
        <ul>
          <li className="homeTabMobile">
            <a href="#home">sunnyside</a>
          </li>
          <li className="dropdownMenu">
            <ul>
              <li>
                About
              </li>
              <li>
                Services
              </li>
              <li>
                Projects
              </li>
              <li>
                Contacts
              </li>
            </ul>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
