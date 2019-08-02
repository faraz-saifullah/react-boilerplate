import { fromJS } from 'immutable';
// import console = require('console');
// eslint-disable-next-line import/no-cycle

// The initial state of the App
export const initialState = fromJS({
  test: [],
  answers: [],
});

/* eslint-disable default-case, no-param-reassign */
function listReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default listReducer;
