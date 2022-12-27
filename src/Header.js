import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import LayersIcon from '@mui/icons-material/Layers';
import './Header.css'

function Header() {
    return (
        <Navbar className='headnavbar' bg="light" expand="md">
          <Container>
           
            <Navbar.Brand href="#home">  <LayersIcon style={{color:"blue"}}/>Monst</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto headercontent">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#home">About Us</Nav.Link>
                <Nav.Link href="#home">Services</Nav.Link>
                <Nav.Link href="#home">Company</Nav.Link>
                <Nav.Link href="#home">Blog</Nav.Link>
                <Nav.Link href="#home">Contact</Nav.Link>
              </Nav>
              <Button variant="light">Log In</Button>
              <Button variant="primary">Sign Up</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header