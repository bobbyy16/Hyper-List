import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './index.css';
import Companies from './components/Companies';
import Docs from './components/Docs';
import NotFound from './components/NotFound';
import React from 'react';
import {useEffect} from 'react';
import ReactGA from 'react-ga4';


function App() {
  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_REACT_APP_GA_TRACKING_ID);
    ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });  
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
