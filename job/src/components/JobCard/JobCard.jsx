
import { Link } from "react-router-dom";
import "./JobCard.css";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <h4>{job.company}</h4>

      <p className="job-location">📍 {job.location}</p>
      <p>{job.description}</p>

      <div className="job-skills">
        {(job.skills || []).map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <div className="job-card-actions">
        <Link
          to={`/jobs/${job.id}`}
          className="job-details-btn"
        >
          View Details
        </Link>

        {job.applyUrl ? (
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noreferrer"
            className="apply-btn"
          >
            Apply Now →
          </a>
        ) : (
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(
              job.company + " " + job.title + " careers apply"
            )}`}
            target="_blank"
            rel="noreferrer"
            className="apply-btn"
          >
            Find Application →
          </a>
        )}
      </div>
    </div>
  );
}

export default JobCard;

