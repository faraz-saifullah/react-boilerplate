import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectList } from './selectors';
import MaterialTableDemo from './table';
import SimpleModal from './modal';
import Header from '../../components/Header';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      native: 'English',
      word: '',
      foreign: 'Spanish',
      translation: '',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.persist();
    event.preventDefault();
    this.props.addToListCall(this.state);
  }

  render() {
    return (
      <div>
        <h1>
          <Header />
          <MaterialTableDemo />
        </h1>
        <SimpleModal />
      </div>
    );
  }
}

List.propTypes = {
  addToListCall: PropTypes.func,
  // eslint-disable-next-line react/no-unused-prop-types
  list: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
});

export function mapDispatchToProps() {
  // return {
  //   addToListCall: list => dispatch(addToList(list)),
  // };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(List);
