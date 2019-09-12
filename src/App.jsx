import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  state = {
    value: 'João',
  };

  render() {
    const { value } = this.state;
    const { name } = this.props;

    return (
      <>
        <div>{value}</div>
        <div>{name}</div>
      </>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
};
