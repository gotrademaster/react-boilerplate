import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Home = ({ value, click }) => (
  <>
    <Text>
      Hi, increment the value:
      <Number>{value}</Number>
      <Button type='button' onClick={() => click(1)}>
        increment
      </Button>
    </Text>
  </>
);

const Number = styled.span`
  font-size: 50px;
  font-weight: bold;
  display: block;
`;

const Text = styled.h1`
  font-size: 40px;
  width: 100%;
  display: block;
  text-align: center;
  padding-top: 15%;
`;

const Button = styled.button`
  background: #000;
  color: #fff;
  width: 10%;
  border: none;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;

Home.propTypes = {
  value: PropTypes.number,
  click: PropTypes.func.isRequired,
};

export default Home;
