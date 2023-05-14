import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./asset/Navbar";
import Home from "./Page/Home";
import Destination from "./Page/Destination";
import Crew from "./Page/Crew";
import Technology from "./Page/Technology";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Technology" element={<Technology />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
