import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
  /* this.props.children */
};

Section.propTypes = {
  title: PropTypes.string,
  /* onClick: PropTypes.number, */
  /*   onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired, */
};

export default Section;
