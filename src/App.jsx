import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import './index.css'
import Companies from './components/Companies';
import Open_Source from './components/Open_Source';
import Docs from './components/Docs';
import NotFound from './components/NotFound';
import ReactGA from 'react-ga4';

function App() {

  ReactGA.initialize([
    {
      trackingId: process.env.REACT_APP_GA_TRACKING_CODE,
      gaOptions: {}, // optional
      gtagOptions: {}, // optional
    },

  ]);
  
  // Send pageview with a custom path
  ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });
  return (
    <div>
        <Router>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/companies" element={<Companies />}></Route>
              <Route path='/open-source' element={<Open_Source />}></Route>
              <Route path='/docs' element={<Docs />}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>  
      </Router>
    </div>

  )
}

export default App
