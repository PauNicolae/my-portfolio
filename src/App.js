
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';

function App() {
   return (
      <div className="App">
         <Router>
         <Navbar />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route exact path="/contact" element={<Contact />} />
               <Route exact path="/projects" element={<Projects />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
