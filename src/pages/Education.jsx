import Timeline from "../assets/components/Timeline";

export default function ContactMe() {
    return (
      <section id="Education" className="education--section">
        <div className="education--container">
          <p className="sub--title">My Education Timeline</p>
          <h2>Education</h2>
        </div>
        <div className="timeline--container">
            <Timeline />
        </div>
      </section>
    );
  }