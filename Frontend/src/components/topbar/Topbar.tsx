import { useState } from "react";
import {getImageUrl} from '../../../utils';

import "./index.scss";

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuClassString = `navbar-menu-items ${menuOpen && "navbar-menu-open"}`;
  return (
    <nav className="navbar">
      <a href="/" className="navbar-title">
        Portfolio
      </a>
      <div className="navbar-menu">
        <img
          className="navbar-menu-btn"
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={menuClassString} onClick={()=>setMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
