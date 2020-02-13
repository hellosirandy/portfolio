import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import styles from './styles';

const Experience = ({
  title, subtitle, time, location, last, bulletins,
}) => (
  <div>
    <div>
      <h1 style={styles.title}>{title}</h1>
      <h2 style={styles.subtitle}>{subtitle}</h2>
      <h3 style={styles.subsubtitle}>{time}</h3>
      <h3 style={styles.subsubtitle}>{location}</h3>
      {bulletins.map((bulletin) => (
        <p key={uuid()} style={styles.bulletin}>
•
          {' '}
          {bulletin}
        </p>
      ))}
    </div>
    {!last && <hr />}
  </div>
);

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  last: PropTypes.bool.isRequired,
  bulletins: PropTypes.array.isRequired,
};

export default Experience;
