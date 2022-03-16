import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../assets/logo.png'

export const NavBar = () => {
  return (
    <Navbar variant='light' bg='warning' expand="lg" fixed='top'>
        <Container>
            <Navbar.Brand href="/">
                <img src={logo}  height='56'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
            <NavDropdown title="TU CUENTA 👄🐲" id="basic-nav-dropdown">
                <NavDropdown.Item href="login"><i className="bi bi-people"></i>  Iniciar sesión</NavDropdown.Item>
                <NavDropdown.Item href="register"><i className="bi bi-key"></i>  Registro</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="CATEGORÍAS" id="basic-nav-dropdown">
                <NavDropdown.Item href="boardgames"><i className="bi bi-dice-5"></i>  Boardgames</NavDropdown.Item>
                <NavDropdown.Item href="expansions"><i className="bi bi-puzzle"></i>  Expansions</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
                <NavDropdown.Item href="backend"><i className="bi bi-gear-fill"></i>  Productos</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
