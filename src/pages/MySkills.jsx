import data from "../data/index.json";
import { useTranslation } from "react-i18next";

export default function MySkills() {
  const {t} = useTranslation();

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">{t("skillsSection.title")}</p>
        <h2 className="skills--section--heading">{t("skillsSection.heading")}</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt={t(`${item.translationKey}.title`)} />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{t(`${item.translationKey}.title`)}</h3>
              <p className="skills--section--description">{t(`${item.translationKey}.description`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}