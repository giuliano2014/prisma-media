import React, { Component } from 'react';

import './movies.css';
import Filter from '../filter/Filter';

export default class Movies extends Component {
  render() {
    return (
      <div className="movies">
        <h2 className="title">Tous les films</h2>
        <Filter />
      </div>
    );
  }
}
