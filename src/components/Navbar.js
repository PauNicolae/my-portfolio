import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navbar.css'

function TextLinkExample() {
   return (
      <Navbar collapseOnSelect expand="lg" variant="dark">
         <Container>
            <Navbar.Brand href="/">Pau Nicolae</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
               <Nav>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/About">About</Nav.Link>
                  <Nav.Link href="/Projects">Projects</Nav.Link>
                  <Nav.Link href="/Contact">Contact</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default TextLinkExample;
