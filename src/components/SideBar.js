import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';
import logo from '../assets/images/blacklogo.png';

const listItemStyle = {
  border: 'none',
  paddingTop: 6,
  paddingBottom: 8,
  paddingLeft: 0,
  paddingRight: '2rem',
  outline: 0,
};

const styles = {
  container: {
    width: 300,
    paddingBottom: 60,
    height: '100%',
    position: 'fixed',
  },
  listItem: listItemStyle,
  highlitedListItem: {
    ...listItemStyle,
    fontWeight: 600,
  },
  divider: {
    ...listItemStyle,
    padding: 0,
  },
  header: {
    ...listItemStyle,
    display: 'flex',
    alignItems: 'center',
    paddingTop: '0',
    paddingBottom: '1.5rem',
  },
};

const SideBar = () => {
  const history = useHistory();
  const handleItemClicked = (path) => () => history.push(path);
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

export default SideBar;
