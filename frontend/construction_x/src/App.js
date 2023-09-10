import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Home from '../src/Pages/Home/Home.jsx';
import Labour from '../src/Pages/Labour/Labour.jsx';
import Material from '../src/Pages/Material/Material.jsx';
import Support from '../src/Pages/Support/Support.jsx';
import Visual from '../src/Pages/Visual/Visual.jsx';
import Safety from '../src/Pages/Safety/Safety.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/labour" element={<Labour />} />
          <Route path="/material" element={<Material />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/support" element={<Support />} />
          <Route path="/visual" element={<Visual />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
