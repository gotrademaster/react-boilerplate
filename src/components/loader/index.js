import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ visible }) => (visible ? (
  <div className='loader'>
    <div className='loader-icon'>
      <h1>Loading...</h1>
    </div>
  </div>
) : null);

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Loader;
