import React, { Component } from 'react';

import './assets/styles/reset.css';
import './assets/styles/styles.css';

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
