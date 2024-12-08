import aboutMeImg from "../assets/images/aboutme-photo.webp";
import aboutMeImgSmall from "../assets/images/aboutme-photo-140w.webp";
import aboutMeImgMedium from "../assets/images/aboutme-photo-320w.webp";
import aboutMeImgLarge from "../assets/images/aboutme-photo-567w.webp";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const  {t} = useTranslation();

  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
      <img
          src={aboutMeImg} // Default image for browsers that do not support srcSet
          srcSet={`${aboutMeImgSmall} 140w, ${aboutMeImgMedium} 320w, ${aboutMeImgLarge} 567w, ${aboutMeImg} 800w`}
          sizes="(min-width: 1220px) calc(50vw - 143px), (min-width: 1060px) 800px, (min-width: 680px) calc(82.22vw - 55px), (min-width: 600px) calc(143.33vw - 460px), calc(93.21vw - 151px)"
          alt="About Me photo"
        />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">{t("aboutMeSection.title")}</p>
          <h2 className="skills-section--heading">{t("aboutMeSection.heading")}</h2>
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
