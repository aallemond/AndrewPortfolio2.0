import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";



const Header = () => {
    return(
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Nav href="#Home">Andrew Allemond</Nav>
                <Nav className="flex-row-reverse">
                    <NavLink href='#Projects'>Projects</NavLink>
                    <NavLink href='#Contact'>Contact Me</NavLink>
                    <NavLink href="#About">About Me</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;