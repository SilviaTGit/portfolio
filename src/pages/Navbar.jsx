import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import logoST from "../assets/images/ST-logo-nobg-100w.webp";
import { useTranslation } from "react-i18next";
import flagEN from "../assets/images/flags/english.webp";
import flagFR from "../assets/images/flags/french.webp";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Status for the active section
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Definition of the sections
  const sections = useMemo(
    () => [
    { id: "heroSection", label: "home" },
    { id: "MyPortfolio", label: "portfolio" },
    { id: "AboutMe", label: "aboutMe" },
    { id: "Contact", label: "contact" },
  ],
  []
  );

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

  // Function to handle scrolling
  const handleScroll = useCallback(() => {
    let currentSection = "";
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = id;
        }
      }
    });
    setActiveSection(currentSection);
  }, [sections]);

  const scrollToSection = (event, id) => {
    event.preventDefault();
    closeMenu(); // To close the mobile menu
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
        <img src={logoST} alt="Logo" className="navbar--logo--img" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault(); // To prevent the default behavior of the anchor tag
          toggleNav();
        }}
        href="#"
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          {sections
            .filter((section) => section.id !== "Contact") // Exclude "Contact" from main links because it's a button
            .map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => scrollToSection(e, id)}
                  className={`navbar--content ${
                    activeSection === id ? "navbar--active-content" : ""
                  }`}
                >
                  {t(`navbar.${label}`)}
                </a>
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
        {/* Contact Button */}
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