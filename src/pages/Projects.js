import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Project.css';

function BasicExample() {
   return (
      <div>
         <img className="scroll" src="../scroll.png" alt="" />

         <div className="box">
            <div className="row">
               <div className="col-xs col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 p-3 ">
                  <Card.Img variant="top" src="../project-scroll.png" />
                  <Card className="card">
                     <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                           Some quick example text to build on the card title
                           and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                     </Card.Body>
                  </Card>
               </div>
               <div className="col-xs col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 p-3">
                  <Card.Img variant="top" src="../project-scroll.png" />
                  <Card className="card">
                     <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                           Some quick example text to build on the card title
                           and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                     </Card.Body>
                  </Card>
               </div>
               <div className="col-xs col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 p-3">
                  <Card.Img variant="top" src="../project-scroll.png" />
                  <Card className="card">
                     <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                           Some quick example text to build on the card title
                           and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                     </Card.Body>
                  </Card>
               </div>
               <div className="col-xs col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 p-3">
                  <Card.Img variant="top" src="../project-scroll.png" />
                  <Card className="card">
                     <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                           Some quick example text to build on the card title
                           and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                     </Card.Body>
                  </Card>
               </div>
            </div>
         </div>
      </div>
   );
}

export default BasicExample;
