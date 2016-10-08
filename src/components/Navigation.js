import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Navigation = function () {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Paraguay Consult</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem href="#">Home</NavItem>
          <NavItem href="#">About Us</NavItem>
          <NavDropdown title="Why Paraguay" id="basic-nav-dropdown">
            <MenuItem>Data</MenuItem>
            <MenuItem>Outlook</MenuItem>
            <MenuItem>Opportunities</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;
