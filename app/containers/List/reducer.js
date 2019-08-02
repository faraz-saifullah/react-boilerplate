import { fromJS } from 'immutable';
import { ADD_TO_LIST, DELETE_FROM_LIST } from './constants';
// import console = require('console');
// eslint-disable-next-line import/no-cycle

// The initial state of the App
export const initialState = fromJS({
  list: [],
});

/* eslint-disable default-case, no-param-reassign */
function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_LIST:
      // eslint-disable-next-line no-case-declarations
      const list = state.get('list').toJS();
      // eslint-disable-next-line no-case-declarations
      const finalList = fromJS([...list, action.payload]);
      return state.set('list', finalList);
    case DELETE_FROM_LIST:
      // eslint-disable-next-line no-case-declarations
      const final = fromJS(action.payload);
      return state.set('list', final);
    default:
      return state;
  }
}

export default listReducer;
