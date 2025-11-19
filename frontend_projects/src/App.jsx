import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Roadmap from './components/Roadmap';
import Aitutor from './components/Aitutor';
import Cards from './components/Cards/Cards';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path="/roadmap" element={<Roadmap/>} />
          <Route path="/projects" element={<Cards />} />
          <Route path="/aitutor" element={<Aitutor/>} />
          <Route path="/" element={<div>Roadmap Content</div>} />
        </Routes>
      </Router>
    </div>    
  )
}

export default App
