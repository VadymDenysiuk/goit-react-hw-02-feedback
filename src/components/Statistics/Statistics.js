import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Container>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive feedback: {positivePercentage}%</Text>
    </Container>
  );
};

Statistics.propTypes = {
  /* onClick: PropTypes.number, */
  /*   onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired, */
};

export default Statistics;
