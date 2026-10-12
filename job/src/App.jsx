
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import JobDetails from "./pages/JobDetails/JobDetails";
import SavedJobs from "./pages/SavedJobs/SavedJobs";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Explore Jobs */}
        <Route path="/jobs" element={<Jobs />} />

        {/* Job Details */}
        <Route path="/jobs/:id" element={<JobDetails />} />

        {/* Saved Jobs */}
        <Route path="/saved-jobs" element={<SavedJobs />} />

        {/* Authentication */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Redirect invalid routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;






