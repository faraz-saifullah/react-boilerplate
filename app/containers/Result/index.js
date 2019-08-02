import React, { memo } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CenteredSection from './CenteredSection';
import { makeSelectTest, makeSelectAnswers } from '../TestList/selectors';
import Header from '../../components/Header';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'From Language', field: 'native' },
        { title: 'Word', field: 'word' },
        { title: 'To Language', field: 'foreign' },

        {
          title: 'Correct Answer',
          field: 'translation',
        },
        {
          title: 'Your Answer',
          field: 'answer',
        },
        {
          title: 'Result ',
          field: 'result',
        },
      ],
    };
  }

  delFromList() {
    const data = this.props.test;
    const { answers } = this.props;
    for (let i = 0; i < data.length; i += 1) {
      data[i].answer = answers[i];
    }
  }

  render() {
    const data = this.props.test;
    const { answers } = this.props;
    let score = 0;
    for (let i = 0; i < data.length; i += 1) {
      data[i].answer = answers[i];
      // eslint-disable-next-line eqeqeq
      if (data[i].translation == data[i].answer) {
        data[i].result = 'Correct';
        score += 1;
        // eslint-disable-next-line eqeqeq
      } else if (answers[i] == '') data[i].result = 'Unattempted';
      else data[i].result = 'Wrong';
    }
    return (
      <div>
        <Header />
        <CenteredSection>
          Score is: {score} / {this.props.test.length}
        </CenteredSection>
        <MaterialTable
          title="Result"
          columns={this.state.columns}
          data={data}
        />
      </div>
    );
  }
}

Test.propTypes = {
  answers: PropTypes.array,
  test: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  test: makeSelectTest(),
  answers: makeSelectAnswers(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(Test);
