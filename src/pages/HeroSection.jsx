import heroImg from "../assets/images/hero_img2.png";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I&apos;m Silvia</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          I am passionate about web development, UI/UX and accessibility.
            <br /> Are you curious to find out more about me?
          </p>
        </div>
        <a href="https://www.linkedin.com/in/tuo-profilo-linkedin" target="_blank" rel="noreferrer">
        <button className="btn btn-primary hero--section--button">Let&apos;s connect!</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src={heroImg} alt="Hero Section" />
      </div>
    </section>
  );
}
