
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
        {/* Open Register page first */}
        <Route
          path="/"
          element={<Navigate to="/register" replace />}
        />

        {/* Authentication pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Home page after login */}
        <Route path="/home" element={<Home />} />

        {/* Other pages */}
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/saved-jobs" element={<SavedJobs />} />

        {/* Redirect invalid routes */}
        <Route
          path="*"
          element={<Navigate to="/register" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;







