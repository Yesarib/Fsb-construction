import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Company from "./components/company/Company";
import Home from "./components/home/Home";
import Admin from './components/admin/Admin'
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/client/*" element={<App />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
