import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../assets/logo.png'

export const NavBar = () => {
  return (
    <Navbar variant='light' bg='warning' expand="lg" fixed='top'>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo}  height='56'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
                <NavDropdown title="FRONTEND" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"><i className="bi bi-dice-5"></i>  Boardgames</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"><i className="bi bi-puzzle"></i>  Expansions</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="BACKEND" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"><i className="bi bi-gear-fill"></i>  Boardgames</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"><i className="bi bi-pen-fill"></i>  Expansions</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
