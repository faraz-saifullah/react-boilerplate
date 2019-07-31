/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectList = state => state.get('list', initialState);

const makeSelectList = () =>
  createSelector(
    selectList,
    listState => listState.get('list').toJS(),
  );
export { selectList, makeSelectList };
