import React, { Component } from 'react';

import './movies.css';
import Filter from '../filter/Filter';

export default class Movies extends Component {
  render() {
    return (
      <div className="movies">
        <h2 className="title">Tous les films</h2>
        <Filter />
        <ul className="wrapper-all-movies">
          <li>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 1</h3>
            <p className="movie-date">Date</p>
          </li>
          <li>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 2</h3>
            <p className="movie-date">Date</p>
          </li>
          <li>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 1</h3>
            <p className="movie-date">Date</p>
          </li>
          <li>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 2</h3>
            <p className="movie-date">Date</p>
          </li>
          <li>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 1</h3>
            <p className="movie-date">Date</p>
          </li>
          <li>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 2</h3>
            <p className="movie-date">Date</p>
          </li>
          <li>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 1</h3>
            <p className="movie-date">Date</p>
          </li>
          <li>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 2</h3>
            <p className="movie-date">Date</p>
          </li>
          <li>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 1</h3>
            <p className="movie-date">Date</p>
          </li>
          <li>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 2</h3>
            <p className="movie-date">Date</p>
          </li>
        </ul>
      </div>
    );
  }
}
