import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <A to="/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/list">
          <FormattedMessage {...messages.list} />
        </HeaderLink>
        <HeaderLink to="/test">
          <FormattedMessage {...messages.test} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
