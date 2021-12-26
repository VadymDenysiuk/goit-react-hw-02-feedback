import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './Notification.styled';

const Notification = ({ message }) => {
  return <Text>{message}</Text>;
  /* this.props.children */
};

Notification.propTypes = {
  /* title: PropTypes.string, */
  /* onClick: PropTypes.number, */
  /*   onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired, */
};

export default Notification;
