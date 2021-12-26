import { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Section from '../Section';
import Notification from '../Notification';
import { Container } from './Feedback.styled';

class Feedback extends Component {
  static defaultProps = {
    initialGrade: 0,
  };

  /*  static PropTypes {
    initialGrade: PropTypes.number,
  }
 */
  state = {
    good: this.props.initialGrade,
    neutral: this.props.initialGrade,
    bad: this.props.initialGrade,
  };

  /* increments */

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  /* handleButtonGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleButtonNeutral = e => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleButtonBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
 */
  /* total */

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  /* total positive */

  countPositiveFeedbackPercentage() {
    return Math.round(
      (this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100,
    );
  }

  /* render */

  render() {
    const objKey = Object.keys(this.state);

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={objKey}
            onLeaveFeedback={this.onLeaveFeedback}
            /* onGood={this.handleButtonGood}
            onNeutral={this.handleButtonNeutral}
            onBad={this.handleButtonBad} */
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.state.good && this.countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </Container>
    );
  }
}

export default Feedback;
