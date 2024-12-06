import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import logoST from "../assets/images/ST-logo-nobg-100w.webp";
import { useTranslation } from "react-i18next";
import flagEN from "../assets/images/flags/english.webp";
import flagFR from "../assets/images/flags/french.webp";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const { t, i18n } = useTranslation(); // Hook for translations
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for the language dropdown
  const dropdownRef = useRef(null); // Ref for the dropdown

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Change language
    setDropdownOpen(false); // Close dropdown after language change
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src={logoST} alt="Logo" className="navbar--logo--img" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              {t("navbar.home")} {/* Dynamic translation */}
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              {t("navbar.portfolio")}
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              {t("navbar.aboutMe")}
            </Link>
          </li>
        </ul>
      </div>
    <div className="navbar--btns">
      <div className="navbar--language-selector">
        {/* Language selector */}
        <div ref={dropdownRef} className={`dropdown ${dropdownOpen ? "open" : ""}`}>
          <button onClick={toggleDropdown} className="btn btn-lang btn-outline-primary">
            {t("navbar.language")} ▾
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={() => changeLanguage("en")} className="dropdown-item">
                <img src={flagEN} alt="English" className="flag-icon" />
                <p>English</p>
              </button>
              <button onClick={() => changeLanguage("fr")} className="dropdown-item">
                <img src={flagFR} alt="French" className="flag-icon" />
                <p>Français</p>
              </button>
          </div>
          )}
        </div>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        {t("navbar.contact")}
      </Link>
    </div>
    </nav>
  );
}

export default Navbar;