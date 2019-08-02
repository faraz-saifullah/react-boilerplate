/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
const selectTest = state => state.get('test', initialState);

const makeSelectTest = () =>
  createSelector(
    selectTest,
    testState => testState.get('test').toJS(),
    // testState => testState.test,
  );
export { selectTest, makeSelectTest };
