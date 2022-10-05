import React from 'react';
import '../Home.css';
import MovingText from 'react-moving-text';

const About = () => {
   return (
    <div>
    <img className="scroll" src="../about.png" alt="" />
    <div className="about-section">
    <MovingText
  type="fadeIn"
  duration="2000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
            <img className="book" src="../book3.png" alt="" srcset="" />
            </MovingText>
      </div>
      
      </div>
   );
};

export default About;
