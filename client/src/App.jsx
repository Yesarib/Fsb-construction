import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/home";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Company from "./components/company/Company";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/company' element={<Company />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
