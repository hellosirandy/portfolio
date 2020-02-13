import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { withRouter } from 'react-router-dom';
import styles from './styles';
import logo from '../../assets/images/blacklogo.png';

const SideBar = ({ history }) => {
  const handleItemClicked = (path) => () => {
    history.push(path);
  };
  const path = history.location.pathname;
  return (
    <div style={styles.container}>
      <ListGroup>
        <ListGroup.Item as="div" style={styles.header}>
          <Image src={logo} width="40px" height="40px" />
          <h6 style={{ fontSize: '2rem', margin: 0, marginLeft: 10 }}>ANDY CHIEN</h6>

        </ListGroup.Item>
        <ListGroup.Item onClick={handleItemClicked('/')} action style={path === '/' ? styles.highlitedListItem : styles.listItem}>About</ListGroup.Item>
        <ListGroup.Item onClick={handleItemClicked('/work')} action style={path === '/work' ? styles.highlitedListItem : styles.listItem}>Work</ListGroup.Item>
        <ListGroup.Item onClick={handleItemClicked('/education')} action style={path === '/education' ? styles.highlitedListItem : styles.listItem}>Education</ListGroup.Item>
        <ListGroup.Item onClick={handleItemClicked('/contact')} action style={path === '/contact' ? styles.highlitedListItem : styles.listItem}>Contact</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

SideBar.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SideBar);
