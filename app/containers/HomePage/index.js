/* eslint-disable import/no-absolute-path */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import CenteredSection from './CenteredSection';
import Header from '../../components/Header';

export default function HomePage() {
  return (
    <h1>
      <CenteredSection>
        <Header />
        <FormattedMessage {...messages.header} />
      </CenteredSection>
    </h1>
  );
}
