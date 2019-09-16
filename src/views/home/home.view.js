import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ value, click }) => (
  <div>
    <h1>
      Hi, increment the value:
      {' '}
      {value}
      <button type='button' onClick={() => click(1)}>
        increment
      </button>
    </h1>
  </div>
);

Home.propTypes = {
  value: PropTypes.number,
  click: PropTypes.func.isRequired,
};

export default Home;
