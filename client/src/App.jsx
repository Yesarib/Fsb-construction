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
    <>
      <Navbar />
      <Routes>
        <Route path="/client" element={<Home />} />
        <Route path="/client/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
