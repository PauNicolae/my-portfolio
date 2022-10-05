import React from 'react'
import sun from '../sun.png';
import '../Home.css';
import { Typewriter } from 'react-simple-typewriter';


const Home = () => {
  return (
    <div className="App-header">
        <img src={sun} className="App-logo" alt="sun" />
        <span className="welcome-text" style={{ color: 'green', fontWeight: 'bold'}}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Hi👋', 'My name is', 'Pauline!👧', 'Welcome', 'to my', 'world!💚']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <a
          className="App-button"
          href="/About"
        >
          Click here
        </a>

   
    </div>
  )
}

export default Home
