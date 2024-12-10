import { useTranslation } from "react-i18next";

export default function ContactMe() {
  const {t} = useTranslation ();

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">{t("contactMeSection.subtitle")}</p>
        <h2>{t("contactMeSection.heading")}</h2>
        <p className="text-md">
        {t("contactMeSection.text")}
        </p>
      </div>
        <a href="mailto:silviatonini.work@gmail.com">
          <button className="btn btn-primary contact--form--btn">{t("contactMeSection.contactMeBtn")}</button>
        </a>
    </section>
  );
}
