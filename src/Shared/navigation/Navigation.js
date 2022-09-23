import React from "react";
import './navigation.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
 

const Navigation = () => {
  return (

 <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Authentication </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">       
          <Nav className="me-auto">
            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/users">Users</NavLink></Nav.Link>    
            <Nav.Link><NavLink to="sign-in">Sign In</NavLink></Nav.Link>
            <Nav.Link><NavLink to="sign-up">Sign Up</NavLink></Nav.Link>
          
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
};

export default Navigation;
