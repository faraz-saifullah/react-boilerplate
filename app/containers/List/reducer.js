/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_WORD,
  CHANGE_TRANSLATION,
  ADD_TO_LIST,
  CHANGE_NATIVE,
  CHANGE_FOREIGN,
} from './constants';

// The initial state of the App
export const initialState = {
  native: 'English',
  foreign: 'Spanish',
  word: '',
  translation: '',
  list: [],
};

// export const

/* eslint-disable default-case, no-param-reassign */
const listReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_WORD:
        draft.word = action.word;
        break;
      case CHANGE_TRANSLATION:
        draft.translation = action.translation;
        break;
      case CHANGE_NATIVE:
        draft.native = action.native;
        break;
      case CHANGE_FOREIGN:
        draft.foreign = action.foreign;
        break;
      case ADD_TO_LIST:
        draft.list = [...draft.list, action.list];
        draft.word = action.word;
        draft.translation = action.translation;
        draft.native = action.native;
        draft.foreign = action.foreign;
        break;
    }
  });

export default listReducer;
