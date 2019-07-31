import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import reducer from './reducer';
import {
  makeSelectWord,
  makeSelectTranslation,
  makeSelectNative,
  makeSelectForeign,
} from './selectors';
import {
  changeWord,
  changeTranslation,
  addToList,
  changeNative,
  changeForeign,
} from './actions';
import Button from '../../components/Button';
// eslint-disable-next-line import/no-cycle
import { store } from '../../app';
import Header from '../../components/Header';

const key = 'input';

export function List({
  word,
  translation,
  native,
  foreign,
  onSubmitForm,
  onChangeWord,
  onChangeTranslation,
  onChangeNative,
  onChangeForeign,
}) {
  // eslint-disable-next-line no-unused-vars
  const vocabList = store.getState();
  // console.log(vocabList);
  useInjectReducer({ key, reducer });
  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (
      (word && word.trim().length > 0) ||
      (translation && translation.trim().length > 0)
    )
      onSubmitForm();
  }, []);
  //   useInjectSaga({ key, saga });
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
                placeholder="word"
                value={word}
                onChange={onChangeWord}
              />
              <Input
                id="translation"
                type="text"
                placeholder="translation"
                value={translation}
                onChange={onChangeTranslation}
              />
              <br />
              <select id="native" value={native} onChange={onChangeNative}>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="German">German</option>
                <option value="Russian">Russian</option>
              </select>
              <select id="native" value={foreign} onChange={onChangeForeign}>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="German">German</option>
                <option value="Russian">Russian</option>
              </select>
              {/* <Input
                id="native"
                type="text"
                // placeholder="translation"
                value={native}
                onChange={onChangeNative}
              />
              <Input
                id="foreign"
                type="text"
                // placeholder="translation"
                value={foreign}
                onChange={onChangeForeign}
              /> */}
            </label>
            <Button onClick={onSubmitForm}>Add</Button>
          </Form>
        </CenteredSection>
      </h1>
      {/* {store.getState()}; */}
    </div>
  );
}

List.propTypes = {
  word: PropTypes.string,
  translation: PropTypes.string,
  native: PropTypes.string,
  foreign: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeWord: PropTypes.func,
  onChangeTranslation: PropTypes.func,
  onChangeNative: PropTypes.func,
  onChangeForeign: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  word: makeSelectWord(),
  translation: makeSelectTranslation(),
  native: makeSelectNative(),
  foreign: makeSelectForeign(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeWord: evt => dispatch(changeWord(evt.target.value)),
    onChangeTranslation: evt => dispatch(changeTranslation(evt.target.value)),
    onChangeNative: evt => dispatch(changeNative(evt.target.value)),
    onChangeForeign: evt => dispatch(changeForeign(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      // eslint-disable-next-line no-undef
      dispatch(
        addToList({
          // eslint-disable-next-line no-undef
          word: word.value,
          // eslint-disable-next-line no-undef
          translation: translation.value,
          // // eslint-disable-next-line no-undef
          // native: native.value,
          // // eslint-disable-next-line no-undef
          // foreign: foreign.value,
        }),
      );
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(List);
