import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./Register";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div class="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
