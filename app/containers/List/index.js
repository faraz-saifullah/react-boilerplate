import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import reducer from './reducer';
import { makeSelectList } from './selectors';
import { addToList } from './actions';
import Button from '../../components/Button';
import MaterialTableDemo from './table';
import SimpleModal from './modal';

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

  // getTableBodyAsReactElement() {
  //   const inv = this.props.list;
  //   console.log('inv: ', inv);

  //   return !inv ? null : (
  //     <tbody>
  //       {inv.map(item => {
  //         // changed here
  //         console.log('item: ', item);
  //         return (
  //           <tr key={inv.id}>
  //             {Object.entries(item).map(field => {
  //               // changed here
  //               console.log('field: ', field);
  //               return <td key={item.id}>{field[1]}</td>;
  //             })}
  //           </tr>
  //         );
  //       })}
  //     </tbody>
  //   );
  // }

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
        <SimpleModal />
        <h1>
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
                <FormControl>
                  <InputLabel shrink htmlFor="age-native-label-placeholder">
                    Native
                  </InputLabel>
                  <NativeSelect
                    name="native"
                    value={this.state.native}
                    onChange={e => this.handleChange(e)}
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="German">German</option>
                    <option value="Russian">Russian</option>
                  </NativeSelect>
                  <FormHelperText>Select Native Language</FormHelperText>
                </FormControl>
                <FormControl>
                  <InputLabel shrink htmlFor="age-native-label-placeholder">
                    Foreign
                  </InputLabel>
                  <NativeSelect
                    name="foreign"
                    value={this.state.foreign}
                    onChange={e => this.handleChange(e)}
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="German">German</option>
                    <option value="Russian">Russian</option>
                  </NativeSelect>
                  <FormHelperText>Select Native Language</FormHelperText>
                </FormControl>
              </label>
              <Button onClick={e => this.handleSubmit(e)}>Add</Button>
            </Form>
          </CenteredSection>
          <MaterialTableDemo />
        </h1>
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
