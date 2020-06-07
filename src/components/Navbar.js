import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';
import logo from '../assets/images/whitelogo.png';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();
  const toggleNavbar = () => setExpanded(!expanded);
  const handleLinkClicked = (path) => () => {
    toggleNavbar();
    history.push(path);
  };
  return (
    <Navbar bg="light" variant="light" expand="xs" expanded={expanded}>
      <Navbar.Brand style={{ display: 'flex', alignItems: 'center' }} onClick={() => history.push('')}>
        <Image src={logo} width="30px" height="30px" style={{ marginRight: 5 }} />
      ANDY CHIEN
      </Navbar.Brand>
      <Navbar.Toggle onClick={toggleNavbar} />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link onClick={handleLinkClicked('/')} active={history.location.pathname === '/'}>About</Nav.Link>
          <Nav.Link onClick={handleLinkClicked('/work')} active={history.location.pathname === '/work'}>Work</Nav.Link>
          <Nav.Link onClick={handleLinkClicked('/education')} active={history.location.pathname === '/education'}>Education</Nav.Link>
          <Nav.Link onClick={handleLinkClicked('/contact')} active={history.location.pathname === '/contact'}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
