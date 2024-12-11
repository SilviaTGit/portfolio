import "../src/assets/styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <Router
        basename="/portfolio/"
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;