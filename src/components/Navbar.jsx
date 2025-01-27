import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <a href="/">
          <img
            src="https://www.linkpicture.com/q/HL.png"
            className="logo"
            alt="image"
          />
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
        <div className={`links ${isMenuOpen ? "active" : ""}`}>
          <a
            href="https://github.com/bobbyy16/Hyper-List"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="/" onClick={handleLinkClick}>
            Home
          </a>
          <a href="/companies" onClick={handleLinkClick}>
            Companies
          </a>
          <a href="/docs" className="navbar-docs" onClick={handleLinkClick}>
            Docs
          </a>
        </div>
      </nav>
    </div>
  );
}
