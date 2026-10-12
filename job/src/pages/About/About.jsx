
import "./About.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <h1>About FreshStart</h1>
        <p>
          Your journey to a successful career starts here.
          FreshStart helps freshers discover jobs and internships
          that match their skills.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To connect freshers with exciting career opportunities
            and make job searching simple and accessible.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            To help every fresher find the right opportunity and
            confidently begin their professional journey.
          </p>
        </div>

        <div className="about-card">
          <h2>Why FreshStart?</h2>
          <p>
            Explore fresher jobs, discover internships, and save
            opportunities that match your career goals.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
