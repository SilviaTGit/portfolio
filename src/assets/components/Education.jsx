import Timeline from "./Timeline";
import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();

    return (
      <section id="Education" className="education--section">
        <div className="education--container">
          <p className="sub--title">{t("educationSection.subtitle")}</p>
          <h2>{t("educationSection.heading")}</h2>
        </div>
        <div className="timeline--container">
            <Timeline />
        </div>
      </section>
    );
  }