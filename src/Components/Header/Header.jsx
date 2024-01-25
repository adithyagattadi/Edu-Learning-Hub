import React, { useRef } from 'react';
import { Container } from 'reactstrap';


import './Header.css';

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About Us",
    url: "./AboutUs",
  },
  {
    display: "Admissions",
    url: "./Admissions",
  },
  {
    display: "Academics",
    url: "./Academics",
  },
  {
    display: "Gallery",
    url: "./Gallery",
  },
  {
    display: "Contact Us",
    url: "./Footer",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header style={{border: "2px solid black",}} className="header fixed-top">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="learning d-flex align-items-center gap-1">
              <i className="ri-school-line"></i> Edu-Learning
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
