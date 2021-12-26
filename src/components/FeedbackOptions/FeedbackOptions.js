import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ /* onGood, onNeutral, onBad */ options, onLeaveFeedback }) => {
  return (
    <>
      {/* <div className="buttons"> */}
      {
        options.map(option => (
          <Button key={shortid.generate()} name={option} onClick={onLeaveFeedback}>
            {option}
          </Button>
        ))

        /*  <button onClick={onGood}>Good</button>
      <button onClick={onNeutral}>Neutral</button>
      <button onClick={onBad}>Bad</button> */
      }
    </>
    /* </div> */
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  /*   onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired, */
};

export default FeedbackOptions;
