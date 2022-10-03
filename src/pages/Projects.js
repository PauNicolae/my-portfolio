import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Project.css';

function BasicExample() {
   return (
      <div className="section">
         <img className="scroll" src="../scroll.png" alt="" />

         <div className="box">
            <div className="row">
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 p-3 ">
                  <Card.Img variant="top" src="../kavogue-scroll.png" />
                  <Card className="card">
                     <Card.Body>
                        <Card.Text>
                           Inspired Vogue Magazine website made of Bootstrap.
                        </Card.Text>
                        <Card.Title>HTML, Bootstrap</Card.Title>
                        <a className="site-button" href="https://paunicolae.github.io/kavogueOnlineMagazine/">Live Site</a>
                     </Card.Body>
                  </Card>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 p-3">
                  <Card.Img variant="top" src="../cheater-scroll.png" />
                  <Card className="card">
                     <Card.Body>
                        <Card.Text>
                           A Web Development Resource and Reference Website that
                           features HTML tutorials, exercises, and tools such as
                           a fully functional code editor.
                        </Card.Text>
                        <Card.Title>HTML, CSS, Bootstrap</Card.Title>
                        <a className="site-button" href="https://paunicolae.github.io/miniProject1/">Live Site</a>
                     </Card.Body>
                  </Card>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 p-3">
                  <Card.Img variant="top" src="../nolimit-scroll.png" />
                  <Card className="card">
                     <Card.Body>
                        <Card.Text>
                           A fully functional Fitness Website with Class
                           bookings, Chat Bot, Exercises finder tutorial, Blogs,
                           E-commerce and tools such as BMI and BMR Calculator.
                        </Card.Text>
                        <Card.Title>
                           HTML, CSS, Bootstrap, Javascript, API, jQuery
                        </Card.Title>
                        <a className="site-button" href="https://paunicolae.github.io/miniProject2/index.html">Live Site</a>
                     </Card.Body>
                  </Card>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 p-3">
                  <Card.Img variant="top" src="../meralca-scroll.png" />
                  <Card className="card">
                     <Card.Body>
                        <Card.Text>
                           A simple web application for easy viewing and payment
                           of electric bills
                        </Card.Text>
                        <Card.Title>
                           HTML,CSS, Bootstrap, Javascript, API, jQuery, Laravel
                        </Card.Title>
                        <a className="site-button" href="#">Code</a>
                     </Card.Body>
                  </Card>
               </div>
            </div>
         </div>
      </div>
   );
}

export default BasicExample;
