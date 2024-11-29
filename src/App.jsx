import "../src/assets/styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router
        basename="/portfolio"
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;