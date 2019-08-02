import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import MobileStepper from '@material-ui/core/MobileStepper';
import { makeSelectList } from '../List/selectors';
import { makeSelectTest, makeSelectAnswers } from './selectors';
import { addToTest, finishTest } from './actions';
import Header from '../../components/Header';
import CenteredSection from './CenteredSection';
import reducer from './reducer';
import Form from './Form';
import HeaderLink from './HeaderLink';
import Input from './Input';

class TestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      translation: '',
      answers: ['', '', '', '', '', '', '', '', '', ''],
    };
  }

  componentDidMount() {
    this.startTest();
  }

  startTest() {
    const min = 0;
    const max = this.props.list.length - 1;
    const indexes = [];
    for (let i = 0; i < 10; i += 1) {
      const index = Math.floor(Math.random() * (max - min + 1)) + min;
      if (indexes.includes(index)) i -= 1;
      else indexes.push(index);
    }
    const tempList = [];
    for (let i = 0; i < 10; i += 1) tempList.push(this.props.list[indexes[i]]);
    this.props.addToTestCall(tempList);
  }

  nextQuestion(current, answer, allAnswers) {
    const answerList = allAnswers;
    answerList[current] = answer;
    this.setState({
      answers: answerList,
      index: current + 1 < 10 ? current + 1 : 9,
      translation: '',
    });
  }

  prevQuestion(current, answer, allAnswers) {
    const answerList = allAnswers;
    answerList[current] = answer;
    this.setState({
      answers: answerList,
      index: current - 1 > -1 ? current - 1 : 0,
      translation: '',
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  clickStartTest(event) {
    event.persist();
    event.preventDefault();
    this.startTest();
  }

  render() {
    let data;
    if (typeof this.props.test[0] === 'undefined') {
      data = this.props.list;
    } else {
      data = this.props.test;
    }
    return (
      <CenteredSection>
        <h1>
          <Header />
          <Form>
            <MobileStepper
              variant="progress"
              steps={10}
              position="top"
              style={{ width: '200%' }}
              activeStep={this.state.index}
            />
            <p>Question {this.state.index + 1} / 10</p>
            <br />
            <Input
              id="native"
              type="text"
              name="native"
              value={data[this.state.index].native}
            />{' '}
            <Input
              id="word"
              type="text"
              name="word"
              value={data[this.state.index].word}
            />
            <br />
            <Input
              id="foreign"
              type="text"
              name="foreign"
              value={data[this.state.index].foreign}
            />{' '}
            <Input
              id="translation"
              type="text"
              name="translation"
              placeholder="Translation"
              value={this.state.translation}
              onChange={e => this.handleChange(e)}
            />
            <br />
            <br />
            <HeaderLink
              id="previous"
              onClick={() =>
                this.prevQuestion(
                  this.state.index,
                  this.state.translation,
                  this.state.answers,
                )
              }
            >
              Prev
            </HeaderLink>
            <HeaderLink
              id="next"
              onClick={() =>
                this.nextQuestion(
                  this.state.index,
                  this.state.translation,
                  this.state.answers,
                )
              }
            >
              Next
            </HeaderLink>
            <HeaderLink
              id="finish"
              onClick={() => this.props.finishTestCall(this.state.answers)}
              to="/result"
            >
              Finish
            </HeaderLink>
          </Form>
        </h1>
      </CenteredSection>
    );
  }
}

TestList.propTypes = {
  addToTestCall: PropTypes.func,
  finishTestCall: PropTypes.func,
  list: PropTypes.array,
  test: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
  test: makeSelectTest(),
  answers: makeSelectAnswers(),
});

export function mapDispatchToProps(dispatch) {
  return {
    addToTestCall: test => dispatch(addToTest(test)),
    finishTestCall: answers => dispatch(finishTest(answers)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'test', reducer });

export default compose(
  withConnect,
  withReducer,
  memo,
)(TestList);
