
import { useState } from "react";
import "./Jobs.css";

const jobs = [
  {
    id: 1,
    title: "React.js Developer",
    company: "Tech Solutions",
    location: "Bangalore",
    type: "Full-time",
    description:
      "Join our frontend team to build responsive websites using React.js, JavaScript, HTML, and CSS.",
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "WebSpark Technologies",
    location: "Hyderabad",
    type: "Internship",
    description:
      "Learn frontend development by working on real-world web applications with an experienced team.",
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "Digital Works",
    location: "Chennai",
    type: "Full-time",
    description:
      "Help develop and maintain user-friendly websites using modern web technologies.",
  },
  {
    id: 4,
    title: "UI Developer",
    company: "Creative Minds",
    location: "Bangalore",
    type: "Full-time",
    description:
      "Create attractive and responsive user interfaces with a focus on usability and performance.",
  },
  {
    id: 5,
    title: "Software Developer Intern",
    company: "CodeBridge",
    location: "Pune",
    type: "Internship",
    description:
      "Work with developers to build web features, fix bugs, and improve application quality.",
  },
  {
    id: 6,
    title: "Junior Frontend Developer",
    company: "NextGen Software",
    location: "Hyderabad",
    type: "Full-time",
    description:
      "Develop reusable frontend components and collaborate with designers to improve web experiences.",
  },
  {
    id: 7,
    title: "Web Development Intern",
    company: "Bright Future Labs",
    location: "Remote",
    type: "Internship",
    description:
      "Gain practical experience building responsive web pages and reusable UI components.",
  },
  {
    id: 8,
    title: "React Developer",
    company: "Innovate Tech",
    location: "Mumbai",
    type: "Full-time",
    description:
      "Build interactive web applications using React and integrate frontend components with REST APIs.",
  },
];

function getSavedJobs() {
  try {
    return JSON.parse(localStorage.getItem("freshstart-saved-jobs")) || [];
  } catch {
    return [];
  }
}

function Jobs() {
  const [savedJobs, setSavedJobs] = useState(getSavedJobs);

  const toggleSave = (job) => {
    const alreadySaved = savedJobs.some(
      (savedJob) => savedJob.id === job.id
    );

    const updatedJobs = alreadySaved
      ? savedJobs.filter((savedJob) => savedJob.id !== job.id)
      : [...savedJobs, job];

    setSavedJobs(updatedJobs);
    localStorage.setItem(
      "freshstart-saved-jobs",
      JSON.stringify(updatedJobs)
    );
  };

  return (
    <div className="jobs-page">
      <div className="jobs-heading">
        <h1>Explore Jobs</h1>
        <p>Find your next opportunity with FreshStart.</p>
      </div>

      <div className="jobs-grid">
        {jobs.map((job) => {
          const isSaved = savedJobs.some(
            (savedJob) => savedJob.id === job.id
          );

          return (
            <div className="job-card" key={job.id}>
              <div className="job-card-top">
                <span className="job-type">{job.type}</span>

                <button
                  type="button"
                  className={`heart-button ${
                    isSaved ? "heart-saved" : ""
                  }`}
                  onClick={() => toggleSave(job)}
                  aria-label={isSaved ? "Remove saved job" : "Save job"}
                  title={isSaved ? "Remove from saved jobs" : "Save job"}
                >
                  {isSaved ? "♥" : "♡"}
                </button>
              </div>

              <h2>{job.title}</h2>
              <h3>{job.company}</h3>

              <p className="job-location">
                <span>📍</span> {job.location}
              </p>

              <p className="job-description">{job.description}</p>

              <p className="job-marks">
                <strong>Minimum Marks:</strong> Check official notification
              </p>

              <div className="job-card-actions">
                <a
                  className="apply-button"
                  href={`https://www.google.com/search?q=${encodeURIComponent(
                    job.company + " " + job.title + " official careers"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply Now <span>↗</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Jobs;


