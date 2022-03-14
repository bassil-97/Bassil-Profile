import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import FloatingNav from "./Components/Navbar/FloatingNav";
import Footer from "./Components/Footer/Footer";

import Home from "./Components/Home/Home";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Pricing from "./Components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/resume" exact element={<Resume />} />
        <Route path="/portfolio" exact element={<Projects />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/pricing" exact element={<Pricing />} />
      </Routes>
      <FloatingNav />
      <Footer />
    </div>
  );
}

export default App;
