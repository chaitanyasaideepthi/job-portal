
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Bangalore",
    type: "Full-time",
    salary: "₹3–5 LPA",
  },
  {
    id: 2,
    title: "React.js Developer",
    company: "Web Innovations",
    location: "Hyderabad",
    type: "Internship",
    salary: "₹15,000/month",
  },
  {
    id: 3,
    title: "UI Developer",
    company: "Creative Technologies",
    location: "Remote",
    type: "Full-time",
    salary: "₹3–4 LPA",
  },
];

function getSavedJobs() {
  try {
    return JSON.parse(
      localStorage.getItem("freshstart-saved-jobs")
    ) || [];
  } catch {
    return [];
  }
}

function Home() {
  const [savedJobs, setSavedJobs] = useState(getSavedJobs);

  const toggleSave = (job) => {
    const isSaved = savedJobs.some((item) => item.id === job.id);

    const updatedJobs = isSaved
      ? savedJobs.filter((item) => item.id !== job.id)
      : [...savedJobs, job];

    setSavedJobs(updatedJobs);
    localStorage.setItem(
      "freshstart-saved-jobs",
      JSON.stringify(updatedJobs)
    );
  };

  return (
    <main className="home-page">
      <section className="home-hero">
        <span className="hero-tag">YOUR CAREER STARTS HERE</span>
        <h1>
          Find Your <span>Dream Job</span>
        </h1>
        <p>
          Explore opportunities and start your career with FreshStart.
        </p>
        <Link to="/jobs" className="hero-button">
          Explore All Jobs →
        </Link>
      </section>

      <section className="featured-jobs">
        <div className="section-heading">
          <div>
            <h2>Featured Jobs</h2>
            <p>Discover opportunities that match your skills.</p>
          </div>
          <Link to="/jobs" className="view-all-link">
            View All Jobs →
          </Link>
        </div>

        <div className="home-jobs-grid">
          {jobs.map((job) => {
            const isSaved = savedJobs.some(
              (item) => item.id === job.id
            );

            return (
              <article className="home-job-card" key={job.id}>
                <div className="home-card-top">
                  <div className="company-icon">
                    {job.company.charAt(0)}
                  </div>

                  <button
                    type="button"
                    className={`home-heart ${
                      isSaved ? "home-heart-saved" : ""
                    }`}
                    onClick={() => toggleSave(job)}
                    aria-label={isSaved ? "Unsave job" : "Save job"}
                    title={isSaved ? "Unsave job" : "Save job"}
                  >
                    {isSaved ? "♥" : "♡"}
                  </button>
                </div>

                <h3>{job.title}</h3>
                <p className="home-company">{job.company}</p>

                <div className="home-job-info">
                  <span>📍 {job.location}</span>
                  <span>💼 {job.type}</span>
                </div>

                <div className="home-card-bottom">
                  <div>
                    <small>Salary</small>
                    <strong>{job.salary}</strong>
                  </div>

                  <Link
                    to={`/jobs/${job.id}`}
                    className="home-details-button"
                  >
                    View Details →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Home;

