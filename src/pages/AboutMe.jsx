import aboutMeImg from "../assets/images/aboutme-photo.png";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={aboutMeImg} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          Graduated with a Master&apos;s degree in Foreign Languages for International Business, I possess advanced skills in English, French, and Italian. My academic journey has provided a strong foundation in digital marketing, international, and European law. After my experience as an Export Sales Assistant, where I refined the management of international relations and intercultural communication, I decided to follow my passion for technology, specializing in Web development. I combine my technical skills with a global vision and marketing strategies, creating solid digital solutions, optimized for business and compliant with international regulations.
          </p>
          <p className="hero--section-description">
          I am currently looking for new opportunities for collaboration and growth in the technology sector, where I can make use of my multidisciplinary background. 🌍
          </p>
        </div>
      </div>
    </section>
  );
}
