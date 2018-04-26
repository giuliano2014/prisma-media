import React, { Component } from 'react';

import './movies.css';
import Filter from '../filter/Filter';

export default class Movies extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      data: [],
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=0bc8f854ea8928cf462490e9efaa2f9c&sort_by=popularity.desc')
      .then(res => res.json())
      .then(res => {
        this.setState({
          loading: false,
          data: res.results,
        });
      })
      .catch(err => console.log('Request failed', err));

  }

  render() {

    const data = this.state.data;

    const items = data.map(item => {
      return (
        <li key={item.id}>
          <img src={`${"http://image.tmdb.org/t/p/w200"}${item.poster_path}`} alt="" />
          <h3 className="movie-title">{item.title}</h3>
          <p className="movie-date">{item.release_date.split('-')[0]}</p>
        </li>
      );
    });

    return (
      <div className="movies">
        <h2 className="title">Tous les films</h2>
        <Filter />
        {this.state.loading ? (
          <p align="center">
            Loading...
          </p>
        ) : (
          <ul className="wrapper-all-movies">
            {items}
          </ul>
        )}
      </div>
    );
  }
}
