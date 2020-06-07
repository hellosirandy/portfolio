import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import About from './About';
import CV from './CV';
import Contact from './Contact';

const Content = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <div style={{
      marginLeft: isMobile ? 0 : 300,
      marginTop: isMobile ? 10 : 0,
      paddingLeft: 20,
      paddingRight: 20,
    }}
    >
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/(work|education)" exact component={CV} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </div>

  );
};

export default Content;
