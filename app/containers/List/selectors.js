/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectList = state => state.input || initialState;

const makeSelectWord = () =>
  createSelector(
    selectList,
    listState => listState.word,
  );

const makeSelectTranslation = () =>
  createSelector(
    selectList,
    listState => listState.translation,
  );

const makeSelectNative = () =>
  createSelector(
    selectList,
    listState => listState.native,
  );

const makeSelectForeign = () =>
  createSelector(
    selectList,
    listState => listState.foreign,
  );
export {
  selectList,
  makeSelectTranslation,
  makeSelectWord,
  makeSelectNative,
  makeSelectForeign,
};
