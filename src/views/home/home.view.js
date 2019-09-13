import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ value, increment }) => (
  <div>
    <h1>
      Hi, increment the value:
      {' '}
      {value}
      <button type='button' onClick={() => increment(1)}>
        increment
      </button>
    </h1>
  </div>
);

Home.propTypes = {
  value: PropTypes.number,
  increment: PropTypes.func.isRequired,
};

export default Home;
