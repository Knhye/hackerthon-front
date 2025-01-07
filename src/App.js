import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SymptomAnalysis from "./pages/SymptomAnalysis";
import HealthNews from "./pages/HealthNews";
import Community from "./pages/Community";
import FindHospital from "./pages/FindHospital";
import SpecialistConsultation from "./pages/SpecialistConsultation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar를 Routes 밖으로 이동 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/symptom-analysis" element={<SymptomAnalysis />} />
        <Route path="/health-news" element={<HealthNews />} />
        <Route path="/community" element={<Community />} />
        <Route path="/find-hospital" element={<FindHospital />} />
        <Route
          path="/specialist-consultation"
          element={<SpecialistConsultation />}
        />
      </Routes>
    </Router>
  );
};

export default App;
