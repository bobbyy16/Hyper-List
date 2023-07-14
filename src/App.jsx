import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import './index.css'
import Companies from './components/Companies';
import Open_Source from './components/Open_Source';
import Docs from './components/Docs';
import NotFound from './components/NotFound';

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/companies" element={<Companies />}></Route>
            <Route path='/open-source' element={<Open_Source />}></Route>
            <Route path='/docs' element={<Docs />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>  
    </Router>
  )
}

export default App
