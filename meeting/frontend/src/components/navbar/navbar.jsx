import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

function NavBar() {
  const { url } = useRouteMatch();
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="sideBarcolor">
        <Navbar.Brand href={`${url}`}>Meeting</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={`${url}/perfil`}>Perfil</Nav.Link>
            <Nav.Link href={`${url}/search`}>Buscar Amigos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
