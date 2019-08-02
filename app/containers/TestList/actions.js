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
import { ADD_TO_TEST, FINISH_TEST } from './constants';

export function addToTest(test) {
  // console.log('inside action creator', test);
  return {
    type: ADD_TO_TEST,
    payload: test,
  };
}

export function finishTest(answers) {
  return {
    type: FINISH_TEST,
    payload: answers,
  };
}
