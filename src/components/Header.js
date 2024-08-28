import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavLink, NavbarBrand } from "react-bootstrap";





const Header = () => {
    return(
  
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <NavbarBrand>Andrew Allemond</NavbarBrand>
                <Nav className="flex-row-reverse">
                    <Nav.Link as={Link} to='/projects'>Projects</Nav.Link>
                    <Nav.Link as={Link}to='/contact'>Contact Me</Nav.Link>
                    <NavLink as={Link}to='/'>About Me</NavLink>
                </Nav>
            </Container>
        </Navbar>
       
    )
}

export default Header;