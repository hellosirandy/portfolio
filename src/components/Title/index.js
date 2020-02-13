import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children }) => (
  <h1 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>{children}</h1>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
