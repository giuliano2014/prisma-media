import React, { Component } from 'react';

import Header from './header/Header';
import TopTen from './topten/TopTen';
import Movies from './movies/Movies';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TopTen />
        <Movies />
      </div>
    );
  }
}
