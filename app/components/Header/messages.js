/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  list: {
    id: `${scope}.list`,
    defaultMessage: 'Manage The List',
  },
  test: {
    id: `${scope}.test`,
    defaultMessage: 'Take The Test',
  },
});
