import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectList } from './selectors';
import VocabTable from './vocabTable';
import SimpleModal from './modal';
import Header from '../../components/Header';

// eslint-disable-next-line react/prefer-stateless-function
class List extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Header />
          <VocabTable />
        </h1>
        <SimpleModal />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(List);
