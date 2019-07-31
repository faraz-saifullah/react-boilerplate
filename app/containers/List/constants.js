/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_WORD = 'boilerplate/List/CHANGE_WORD';
export const CHANGE_TRANSLATION = 'boilerplate/List/CHANGE_TRANSLATION';
export const ADD_TO_LIST = 'boilerplate/List/ADD_TO_LIST';
export const CHANGE_NATIVE = 'boilerplate/List/CHANGE_NATIVE';
export const CHANGE_FOREIGN = 'boilerplate/List/CHANGE_FOREIGN';
