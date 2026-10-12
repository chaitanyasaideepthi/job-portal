
import { useState } from "react";
import "./SavedJobs.css";

const STORAGE_KEY = "freshstart-saved-jobs";

function readSavedJobs() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState(readSavedJobs);

  const removeJob = (id) => {
    const updatedJobs = savedJobs.filter((job) => job.id !== id);
    setSavedJobs(updatedJobs);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedJobs));
  };

  return (
    <main className="saved-page">
      <header className="saved-heading">
        <span className="saved-tag">YOUR COLLECTION</span>
        <h1>Saved Jobs <span>♥</span></h1>
        <p>Keep your favorite opportunities in one place.</p>
      </header>

      {savedJobs.length === 0 ? (
        <div className="saved-empty">
          <div className="empty-heart">♡</div>
          <h2>No saved jobs yet</h2>
          <p>Tap the heart on a job card to save it here.</p>
        </div>
      ) : (
        <>
          <p className="saved-count">
            You have saved {savedJobs.length}{" "}
            {savedJobs.length === 1 ? "job" : "jobs"}.
          </p>

          <div className="saved-grid">
            {savedJobs.map((job) => (
              <article className="saved-card" key={job.id}>
                <div className="saved-card-top">
                  <div className="saved-company-icon">
                    {job.company?.charAt(0) || "J"}
                  </div>

                  <button
                    type="button"
                    className="saved-heart"
                    onClick={() => removeJob(job.id)}
                    aria-label={`Remove ${job.title} from saved jobs`}
                    title="Remove saved job"
                  >
                    ♥
                  </button>
                </div>

                <h2>{job.title}</h2>
                <h3>{job.company}</h3>

                <div className="saved-info">
                  <span>📍 {job.location}</span>
                  {job.type && <span>💼 {job.type}</span>}
                </div>

                {job.salary && (
                  <p className="saved-salary">
                    <span>Salary</span>
                    <strong>{job.salary}</strong>
                  </p>
                )}

                {job.description && (
                  <p className="saved-description">{job.description}</p>
                )}

                <button
                  type="button"
                  className="remove-job-button"
                  onClick={() => removeJob(job.id)}
                >
                  Remove Saved Job
                </button>
              </article>
            ))}
          </div>
        </>
      )}
    </main>
  );
}

export default SavedJobs;



