import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import StudyAbroad from './pages/StudyAbroad/StudyAbroad'
import WorkAbroad from './pages/WorkAbroad/WorkAbroad'
import Process from './pages/Process/Process'
import Documentation from './pages/Documentation/Documentation'
import Contact from './pages/Contact/Contact'
import Universities from './pages/Universities/Universities'
import './index.css'
import './App.css'
import './pages/Home/Home.css'
import './pages/StudyAbroad/StudyAbroad.css'
import './pages/WorkAbroad/WorkAbroad.css'
import './pages/Contact/Contact.css'
import './pages/Universities/Universities.css'

function App() {
  return (
    <Router>
      <div className="app">
        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element triangle"></div>
          <div className="floating-element rectangle"></div>
          <div className="floating-element document"></div>
          <div className="floating-element component"></div>
          <div className="floating-element node"></div>
        </div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/study-abroad" element={<StudyAbroad />} />
            <Route path="/work-abroad" element={<WorkAbroad />} />
            <Route path="/process" element={<Process />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/universities" element={<Universities />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
