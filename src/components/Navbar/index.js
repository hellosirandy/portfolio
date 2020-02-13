import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { withRouter } from 'react-router-dom';
import logo from '../../assets/images/whitelogo.png';

const NavBar = ({ history }) => {
  const handleLinkClicked = (path) => () => {
    history.push(path);
  };
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand style={{ display: 'flex', alignItems: 'center' }}>
        <Image src={logo} width="30px" height="30px" style={{ marginRight: 5 }} />
      ANDY CHIEN
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
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

NavBar.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(NavBar);
