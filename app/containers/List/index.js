import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import { FormattedMessage } from 'react-intl';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import reducer from './reducer';
import Table from './List';
// import ListItem from './ListItem';
// import ListItemTitle from './ListItemTitle';
// import messages from './messages';
import { makeSelectList } from './selectors';
import { addToList } from './actions';
import Button from '../../components/Button';
// eslint-disable-next-line import/no-cycle
// import { store } from '../../app';
import Header from '../../components/Header';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      native: 'English',
      foreign: 'Spanish',
      word: '',
      translation: '',
      VocabList: [],
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
    // console.log(this.props);
    // const { list } = store.getState();
    // this.setState({
    //   // eslint-disable-next-line react/no-access-state-in-setstate
    //   ...this.state,
    //   VocabList: [list.list],
    // });
    // console.log(this.state.VocabList);
  }

  render() {
    // console.log('list is: ', this.props.list)
    return (
      <div>
        <h1>
          <Header />
          <CenteredSection>
            <Form>
              <label htmlFor="username">
                <Input
                  id="word"
                  type="text"
                  name="word"
                  placeholder="Word"
                  value={this.state.word}
                  onChange={e => this.handleChange(e)}
                />
                <Input
                  id="translation"
                  type="text"
                  name="translation"
                  placeholder="Translation"
                  value={this.state.translation}
                  onChange={e => this.handleChange(e)}
                />
                <br />
                <select
                  name="native"
                  value={this.state.native}
                  input={<Input id="native" />}
                  onChange={e => this.handleChange(e)}
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="German">German</option>
                  <option value="Russian">Russian</option>
                </select>
                <select
                  name="foreign"
                  value={this.state.foreign}
                  input={<Input id="foreign" />}
                  onChange={e => this.handleChange(e)}
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="German">German</option>
                  <option value="Russian">Russian</option>
                </select>
              </label>
              <Button onClick={e => this.handleSubmit(e)}>Add</Button>
            </Form>
          </CenteredSection>
        </h1>
        <Table>
          {/* <ListItem> */}
          {/* <ListItemTitle> */}
          {/* <FormattedMessage {...messages.scaffoldingHeader} /> */}
          {/* </ListItemTitle> */}
          <p>
            {/* {this.state.VocabList[0]} */}
            {/* <FormattedMessage {...messages.scaffoldingMessage} /> */}
          </p>
          {/* </ListItem> */}

          {/* <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.feedbackHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.feedbackMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.routingHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.routingMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.networkHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.networkMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.intlHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.intlMessage} />
            </p>
          </ListItem> */}
        </Table>
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

export function mapDispatchToProps(dispatch) {
  return {
    addToListCall: list => dispatch(addToList(list)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'list', reducer });

export default compose(
  withConnect,
  withReducer,
  memo,
)(List);
