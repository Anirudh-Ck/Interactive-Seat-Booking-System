import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Summary from "./components/Summary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="*" element={() => <h1>Page not found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
