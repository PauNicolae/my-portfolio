
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import NoPage from './pages/NoPage';
import About from './pages/About';

function App() {
   return (
      <div className="App">
         <Router>
         <Navbar />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route exact path="/about" element={<About />} />
               <Route exact path="/contact" element={<Contact />} />
               <Route exact path="/projects" element={<Projects />} />
               <Route exact path="*" element={<NoPage />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
