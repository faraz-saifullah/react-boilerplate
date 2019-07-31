/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_WORD,
  CHANGE_TRANSLATION,
  ADD_TO_LIST,
  CHANGE_NATIVE,
  CHANGE_FOREIGN,
} from './constants';

export function changeWord(word) {
  return {
    type: CHANGE_WORD,
    word,
  };
}

export function changeTranslation(translation) {
  return {
    type: CHANGE_TRANSLATION,
    translation,
  };
}

export function changeNative(native) {
  return {
    type: CHANGE_NATIVE,
    native,
  };
}

export function changeForeign(foreign) {
  return {
    type: CHANGE_FOREIGN,
    foreign,
  };
}

export function addToList(list) {
  return {
    type: ADD_TO_LIST,
    list,
    word: '',
    translation: '',
    native: 'English',
    foreign: 'Spanish',
  };
}
