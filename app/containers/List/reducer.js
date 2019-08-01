import { fromJS } from 'immutable';
import { ADD_TO_LIST } from './constants';
// eslint-disable-next-line import/no-cycle

// The initial state of the App
export const initialState = fromJS({
  list: [],
});

// export const

/* eslint-disable default-case, no-param-reassign */
function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_LIST:
      // eslint-disable-next-line no-case-declarations
      const list = state.get('list').toJS();
      // eslint-disable-next-line no-case-declarations
      const finalList = fromJS([...list, action.payload]);
      return state.set('list', finalList);
    default:
      return state;
  }
}

export default listReducer;
