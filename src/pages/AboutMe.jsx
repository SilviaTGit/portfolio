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
          With a Master’s degree in Foreign Languages for International Business, I bring advanced proficiency in English, French, and Italian, complemented by expertise in digital marketing and international law. My career began in export sales, where I honed my skills in managing international relations and intercultural communication. Driven by a passion for technology, I transitioned into Web development, merging my technical capabilities with a strategic, business-oriented approach.
          </p>
          <p className="hero--section-description">
          I specialize in crafting digital solutions that are not only technically robust but also aligned with global business needs and regulatory standards. I am eager to collaborate on projects that leverage my multidisciplinary expertise to deliver impactful results in the technology sector. 🌍
          </p>
        </div>
      </div>
    </section>
  );
}
