import React from "react";

const Header = () => {
  return (
    <header>
      <ul>
        <li class="homeTab" >  
          <a href="#home">
            sunnyside
          </a>
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
        <li class="contactsTab">
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
