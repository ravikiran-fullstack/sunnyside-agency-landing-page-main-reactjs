import React,{useState, useRef} from "react";

const Header = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false) 
  const dropDownRef = useRef(null);

  // old way of dropdown menu
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
        <div className="dropdownMenu" onClick={() => setDropDownOpen(!dropDownOpen)} ref={dropDownRef}>
          {dropDownOpen && <div className="dropdownUl">
            <div className="mobileTab"><a href="#about">About</a></div>
            <div className="mobileTab"><a href="#services">Services</a></div>
            <div className="mobileTab"><a href="#projects">Projects</a></div>
            <div className="mobileTab"><a href="#contacts">Contacts</a></div>
          </div>}
        </div>
      </header>
    </>
  );
};

export default Header;
