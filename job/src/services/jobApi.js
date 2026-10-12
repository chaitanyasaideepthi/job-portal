
const JOBS_KEY = "freshstart-jobs";
const SAVED_JOBS_KEY = "freshstart-saved-jobs";

// Get all jobs
export function getJobs() {
  try {
    const storedJobs = localStorage.getItem(JOBS_KEY);

    if (storedJobs) {
      const parsedJobs = JSON.parse(storedJobs);

      if (Array.isArray(parsedJobs)) {
        return parsedJobs;
      }
    }
  } catch (error) {
    console.error("Error loading jobs:", error);
  }

  return [];
}

// Get a job by ID
export function getJobById(id) {
  const jobs = getJobs();

  return jobs.find((job) => String(job.id) === String(id)) || null;
}

// Get saved job IDs
export function getSavedJobIds() {
  try {
    const savedIds = JSON.parse(
      localStorage.getItem(SAVED_JOBS_KEY) || "[]"
    );

    return Array.isArray(savedIds) ? savedIds.map(String) : [];
  } catch (error) {
    console.error("Error loading saved jobs:", error);
    return [];
  }
}

// Get saved jobs
export function getSavedJobs() {
  const jobs = getJobs();
  const savedIds = getSavedJobIds();

  return jobs.filter((job) => savedIds.includes(String(job.id)));
}

// Save a job
export function saveJob(id) {
  const savedIds = getSavedJobIds();
  const jobId = String(id);

  if (!savedIds.includes(jobId)) {
    savedIds.push(jobId);
    localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify(savedIds));
  }

  return savedIds;
}

// Remove a saved job
export function removeSavedJob(id) {
  const updatedIds = getSavedJobIds().filter(
    (savedId) => savedId !== String(id)
  );

  localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify(updatedIds));

  return updatedIds;
}

// Check whether a job is saved
export function isJobSaved(id) {
  return getSavedJobIds().includes(String(id));
}

// Search jobs
export function searchJobs(searchText = "") {
  const jobs = getJobs();
  const query = searchText.trim().toLowerCase();

  if (!query) return jobs;

  return jobs.filter((job) =>
    [job.title, job.company, job.location, job.type]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(query))
  );
}
