import { useState } from "react";
import "./App.css";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Summary from "./components/summary/Summary";
import Layout from "./components/common/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="summary" element={<Summary />} />
          <Route path="*" element={ 
            <div className="flex items-center justify-center h-screen">
              <h1 className="text-3xl text-center">Page not found</h1>
            </div>} />
        </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
