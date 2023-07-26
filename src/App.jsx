import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './index.css';
import Companies from './components/Companies';
import Open_Source from './components/Open_Source';
import Docs from './components/Docs';
import NotFound from './components/NotFound';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

function App() {
  useEffect(() => {
    ReactGA.initialize("G-K0HML6S73C");
    ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path='/open-source' element={<Open_Source />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
