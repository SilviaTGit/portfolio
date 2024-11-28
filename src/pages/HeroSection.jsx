import { useTranslation } from "react-i18next";
import heroImg from "../assets/images/hero_img1.png";

export default function HeroSection() {
  const { t } = useTranslation(); // Hook for translations

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">{t("heroSection.title")}</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              {t("heroSection.subtitle")}
            </span>
            <br />
            Developer
          </h1>
          <p className="hero--section-description">{t("heroSection.description")}</p>
        </div>
        <a href="https://www.linkedin.com/in/silvia-tonini" target="_blank" rel="noreferrer">
          <button className="btn btn-primary hero--section--button">
            {t("heroSection.buttonText")}
          </button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src={heroImg} alt="Hero Section" />
      </div>
    </section>
  );
}
