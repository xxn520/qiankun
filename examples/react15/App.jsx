import React from 'react';

import Logo from './components/Logo'
import HelloModal from './components/HelloModal'

export default class App extends React.Component {
  render() {
    return (
      <div className="react15-main">
        <Logo />
        <p className="react15-lib">
          React version: AAAA
        </p>
        <HelloModal />
      </div>
    );
  }
}
