import { useTranslation } from "react-i18next";
import heroImg from "../images/hero-images/hero-img2.webp";
import heroImgSmall from "../images/hero-images/hero-img2-260w.webp";
import heroImgMedium from "../images/hero-images/hero-img2-400w.webp";
import heroImgLarge from "../images/hero-images/hero-img2-700w.webp";
import AnimatedText from "./AnimatedText"; // Importa il nuovo componente

export default function HeroSection() {
  const { t } = useTranslation(); // Hook for translations

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">{t("heroSection.title")}</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
            </span>
            
            <AnimatedText /> {/* Usa il nuovo componente per il testo che cambia */}
          </h1>
          <p className="hero--section-description">{t("heroSection.description")}</p>
        </div>
        <a href="https://www.linkedin.com/in/silvia-tonini" target="_blank" rel="noreferrer" className="btn btn-primary hero--section--button">
            {t("heroSection.buttonText")}
        </a>
      </div>
      <div className="hero--section--img">
      <img
          src={heroImgSmall} // Default image for browsers that do not support srcSet
          srcSet={`${heroImgSmall} 260w, ${heroImgMedium} 400w,${heroImgLarge} 700w, ${heroImg} 800w`}
          sizes="(min-width: 1220px) calc(50vw - 101px), (min-width: 1020px) 800px, (min-width: 620px) calc(92.37vw - 124px), (min-width: 540px) calc(51.67vw + 90px), (min-width: 500px) calc(-255vw + 1675px), calc(88.89vw - 27px)"
          alt="Hero Section Photo"
          loading="eager"
        />

      </div>
    </section>
  );
}
