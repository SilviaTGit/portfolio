import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom"
import logoST from "../assets/images/ST-logo-nobg-100w.webp";
import { useTranslation } from "react-i18next";
import flagEN from "../assets/images/flags/english.webp";
import flagFR from "../assets/images/flags/french.webp";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);


  const toggleNav = () => {
    setNavActive((prev) => !prev); // Reverse the menu status
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to the section Contact
  const scrollToContact = (event) => {
    event.preventDefault();
    closeMenu();
    document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setNavActive(false);
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navbarRef} className={`navbar ${navActive ? "active" : ""}`}>
      <div>
          <img src={logoST} alt="Logo" className="navbar--logo--img" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault(); // To prevent the default behavior of the anchor tag
          toggleNav();
        }}
        href="#"
        aria-label="Open the Mobile Menu"
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
                  className={({ isActive }) =>
                    `navbar--content ${
                      isActive ? "navbar--active-content" : ""
                    }`
                  }
                >
                  {t("navbar.home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => {
                    closeMenu();
                    scrollToTop();
                  }}
                  className={({ isActive }) =>
                    `navbar--content ${
                      isActive ? "navbar--active-content" : ""
                    }`
                  }
                >
                  {t("navbar.aboutMe")}
                </NavLink>
              </li>
              <li className="contact--mobile-only">
            <a
              href="#Contact"
              onClick={scrollToContact}
              className="navbar--content"
            >
              {t("navbar.contact")}
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar--btns">
        <div className="navbar--language-selector">
          <div
            ref={dropdownRef}
            className={`dropdown ${dropdownOpen ? "open" : ""}`}
          >
            <button
              onClick={toggleDropdown}
              className="btn btn-lang btn-outline-primary"
            >
              {t("navbar.language")} ▾
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button
                  onClick={() => changeLanguage("en")}
                  className="dropdown-item"
                >
                  <img src={flagEN} alt="English" className="flag-icon" />
                  <p>English</p>
                </button>
                <button
                  onClick={() => changeLanguage("fr")}
                  className="dropdown-item"
                >
                  <img src={flagFR} alt="French" className="flag-icon" />
                  <p>Français</p>
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Contact Button */}
        <a
          href="#Contact"
          onClick={scrollToContact}
          className="btn contact-btn btn-outline-primary"
        >
          {t("navbar.contact")}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;