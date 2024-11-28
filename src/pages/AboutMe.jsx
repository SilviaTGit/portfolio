import aboutMeImg from "../assets/images/aboutme-photo.png";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const  {t} = useTranslation();

  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={aboutMeImg} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">{t("aboutMeSection.title")}</p>
          <h1 className="skills-section--heading">{t("aboutMeSection.heading")}</h1>
          <p className="hero--section-description">
          {t("aboutMeSection.description1")}
          </p>
          <p className="hero--section-description">
          {t("aboutMeSection.description2")}
          </p>
        </div>
      </div>
    </section>
  );
}
