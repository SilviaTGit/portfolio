import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoST from "../assets/images/ST-logo-nobg-100w.webp";
import { useTranslation } from "react-i18next";
import flagEN from "../assets/images/flags/english.webp";
import flagFR from "../assets/images/flags/french.webp";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track active section
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Define sections for navigation
  const sections = useMemo(
    () => [
      { id: "/", label: "home", type: "route" },
      { id: "/about", label: "aboutMe", type: "route" },
    ],
    []
  );

  const toggleNav = () => setNavActive((prev) => !prev);
  const closeMenu = () => setNavActive(false);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  // Smooth scrolling to section
  const scrollToSection = (event, id) => {
    event.preventDefault();
    closeMenu();
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
  };

  // Track which section is currently in view
  const handleScroll = useCallback(() => {
    let currentSection = "";
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      const rect = contactSection.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSection = "Contact";
      }
    }
    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll, location.pathname]);

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
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        {/* Scroll to top on logo click */}
        <a
          href="#"
          onClick={(e) => scrollToSection(e, "top")}
          className="navbar--logo"
        >
          <img src={logoST} alt="Logo" className="navbar--logo--img" />
        </a>
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault(); // Prevent default behavior
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
          {sections.map(({ id, label }) => (
            <li key={id}>
              <NavLink
                to={id}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `navbar--content ${
                    isActive ? "navbar--active-content" : ""
                  }`
                }
              >
                {t(`navbar.${label}`)}
              </NavLink>
            </li>
          ))}
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
        {/* Existing Contact Button */}
        <a
          href="#Contact"
          onClick={(e) => scrollToSection(e, "Contact")}
          className={`btn contact-btn btn-outline-primary ${
            activeSection === "Contact" ? "navbar--active-content" : ""
          }`}
        >
          {t("navbar.contact")}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;