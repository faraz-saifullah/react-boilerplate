import { fromJS } from 'immutable';
import { ADD_TO_TEST, FINISH_TEST } from './constants';
// eslint-disable-next-line import/no-cycle

// The initial state of the App
export const initialState = fromJS({
  test: [],
  answers: [],
});

/* eslint-disable default-case, no-param-reassign */
function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_TEST:
      // eslint-disable-next-line no-case-declarations
      const finalTest = fromJS(action.payload);
      return state.set('test', finalTest);
    case FINISH_TEST:
      // eslint-disable-next-line no-case-declarations
      const answers = fromJS(action.payload);
      return state.set('answers', answers);
    default:
      return state;
  }
}

export default listReducer;
