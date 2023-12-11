import "./styles/main.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Contacts from "./pages/contacts";
import Home from "./pages/home";
import Project from "./pages/project";
import Projects from "./pages/projects";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
