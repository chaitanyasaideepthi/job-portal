
import { Link, useParams } from "react-router-dom";
import jobs from "../../data/jobs.js";
import "./JobDetails.css";

function JobDetails() {
  const { id } = useParams();

  const job = jobs.find(
    (item) => String(item.id) === String(id)
  );

  if (!job) {
    return (
      <main className="job-details-page">
        <h1>Job Not Found</h1>
        <p>This job does not exist or is unavailable.</p>
        <Link to="/jobs" className="back-to-jobs">
          ← Back to Jobs
        </Link>
      </main>
    );
  }

  const eligibility = job.eligibility || {};

  return (
    <main className="job-details-page">
      <div className="job-details-container">
        <Link to="/jobs" className="back-to-jobs">
          ← Back to Jobs
        </Link>

        {/* Job Information */}
        <section className="job-details-card">
          <span className="details-job-type">
            {job.type || "Full Time"}
          </span>

          <h1>{job.title}</h1>

          <h2 className="details-company">
            {job.company}
          </h2>

          <p className="details-location">
            📍 {job.location || "Location not specified"}
          </p>

          <p className="details-experience">
            💼 Experience: {job.experience || "Check job notification"}
          </p>

          <div className="details-section">
            <h3>Job Description</h3>
            <p>
              {job.description || "Check the official job notification."}
            </p>
          </div>

          {/* Required Skills */}
          <div className="details-section">
            <h3>Required Skills</h3>

            <div className="details-skills">
              {(job.skills || []).map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="details-section eligibility-section">
            <h3>Eligibility Criteria</h3>

            <div className="eligibility-item">
              <strong>Company:</strong>
              <span>{job.company}</span>
            </div>

            <div className="eligibility-item">
              <strong>Minimum Marks:</strong>
              <span>
                {eligibility.minimumPercentage != null
                  ? `${eligibility.minimumPercentage}%`
                  : "Check official notification"}
              </span>
            </div>

            <div className="eligibility-item">
              <strong>Qualification:</strong>
              <span>
                {eligibility.qualification?.join(", ") ||
                  "Check official notification"}
              </span>
            </div>

            <div className="eligibility-item">
              <strong>Eligible Branches:</strong>
              <span>
                {eligibility.branches?.join(", ") ||
                  "Check official notification"}
              </span>
            </div>

            <div className="eligibility-item">
              <strong>Pass-out Years:</strong>
              <span>
                {eligibility.passoutYears?.join(", ") ||
                  "Check official notification"}
              </span>
            </div>

            <div className="eligibility-item">
              <strong>Backlogs:</strong>
              <span>
                {eligibility.backlogs ||
                  "Check official notification"}
              </span>
            </div>
          </div>

          {/* Apply Button */}
          <div className="details-actions">
            <a
              href={
                job.applyUrl ||
                `https://www.google.com/search?q=${encodeURIComponent(
                  `${job.company} ${job.title} official careers`
                )}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="details-apply-btn"
            >
              Apply on Company Website →
            </a>
          </div>

          <p className="eligibility-note">
            Note: Always verify eligibility requirements in the
            company's official recruitment notification before applying.
          </p>
        </section>
      </div>
    </main>
  );
}

export default JobDetails;


