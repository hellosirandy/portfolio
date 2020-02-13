import React from 'react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import SideBar from './components/SideBar';
import Content from './components/Content';
import Navbar from './components/Navbar';

const App = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  return (
    <Router>
      {isMobile ? (
        <div>
          <Navbar />
          <Content />
        </div>
      ) : (
        <div style={{ padding: '4rem' }}>
          <SideBar />
          <Content />
        </div>
      )}

    </Router>

  );
};

export default App;
