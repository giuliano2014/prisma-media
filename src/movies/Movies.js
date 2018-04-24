import React, { Component } from 'react';

import './movies.css';
import Filter from '../filter/Filter';

export default class Movies extends Component {
  render() {
    return (
      <div>
        <h1 className="movies-test">This is movies</h1>
        <Filter />
      </div>
    );
  }
}
