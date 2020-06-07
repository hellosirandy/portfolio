import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Title from './Title';

library.add(fab);

const styles = {
  socialArea: {
    width: 250,
    display: 'flex',
    justifyContent: 'space-between',
  },
  socialIcon: {
    cursor: 'pointer',
  },
};

const Contact = () => {
  const handleIconClicked = (url) => () => {
    window.open(url, '_blank');
  };
  return (
    <>
      <Helmet>
        <title>Contact - Andy Chien</title>
      </Helmet>
      <Title>Get in touch</Title>
      <p>If you have anything to tell me, show me, or just want or say hi, feel free to reach out at anytime!</p>
      <h5>Let's connect</h5>
      <div style={styles.socialArea}>
        <FontAwesomeIcon
          style={styles.socialIcon}
          onClick={handleIconClicked('https://www.facebook.com/hellosirandy')}
          size="3x"
          color="#3b5998"
          icon={['fab', 'facebook-square']}
        />
        <FontAwesomeIcon
          style={styles.socialIcon}
          onClick={handleIconClicked('https://www.instagram.com/andyxchien/')}
          size="3x"
          color="#e1306c"
          icon={['fab', 'instagram-square']}
        />
        <FontAwesomeIcon
          style={styles.socialIcon}
          onClick={handleIconClicked('https://www.linkedin.com/in/andy-chien-9973b1117/')}
          size="3x"
          color="#0077b5"
          icon={['fab', 'linkedin']}
        />
        <FontAwesomeIcon
          style={styles.socialIcon}
          onClick={handleIconClicked('https://github.com/hellosirandy')}
          size="3x"
          color="#333"
          icon={['fab', 'github-square']}
        />
        <FontAwesomeIcon
          style={styles.socialIcon}
          onClick={handleIconClicked('https://twitter.com/andyxchien')}
          size="3x"
          color="#00acee"
          icon={['fab', 'twitter-square']}
        />
      </div>
    </>
  );
};

export default Contact;
