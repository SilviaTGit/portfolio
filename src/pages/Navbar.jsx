import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logoSvg from "../assets/images/ST-logo-nobg.png";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const { t, i18n } = useTranslation(); // Hook for translations
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for the language dropdown

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
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src={logoSvg} alt="Logo" className="navbar--logo--img" />
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
        <div className="dropdown">
          <button onClick={toggleDropdown} className="btn btn-lang dropdown-btn">
            {t("navbar.language")} ▾
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={() => changeLanguage("en")} className="dropdown-item">
                EN - English
              </button>
              <button onClick={() => changeLanguage("fr")} className="dropdown-item">
                FR - Français
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