import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { makeSelectList } from '../List/selectors';
import { makeSelectTest } from './selectors';
import { addToTest } from './actions';
import Header from '../../components/Header';
import Button from '../../components/Button';
import reducer from './reducer';
import Form from './Form';
import Input from './Input';

class TestList extends React.Component {
  // componentDidMount() {
  //   this.startTest();
  // }
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      translation: '',
    };
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

  nextQuestion() {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      index: (this.state.index + 1) % 10,
    });
  }

  prevQuestion() {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      index: (this.state.index - 1) % 10,
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
    // eslint-disable-next-line react/prop-types
    const data = this.props.test[0];
    // eslint-disable-next-line no-console
    console.log(data[this.state.index]);
    return (
      <div>
        <h1>
          <Header />
          <Button onClick={e => this.clickStartTest(e)}>Start The Test</Button>
          {/* {listItems} */}
          {/* <form>{this.theTest()};</form> */}
          {/* <Button onClick={() => this.prevQuestion()}>Previous</Button>
          <p>Word: {data[this.state.index].word}</p>
					<form>
						<input value={this.state}/>
					</form>
					<Button onClick={() => this.nextQuestion()}>Next</Button> */}
          <Form>
            <label htmlFor="username">
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
              />{' '}
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
            </label>
            <Button onClick={() => this.prevQuestion()}>Previous</Button>
            <Button onClick={() => this.nextQuestion()}>Next</Button>
          </Form>
        </h1>
      </div>
    );
  }
}

TestList.propTypes = {
  addToTestCall: PropTypes.func,
  // eslint-disable-next-line react/no-unused-prop-types
  list: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
  test: makeSelectTest(),
});

export function mapDispatchToProps(dispatch) {
  return {
    addToTestCall: test => dispatch(addToTest(test)),
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
