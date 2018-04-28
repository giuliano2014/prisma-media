import React, { Component } from 'react';

import './movies.css';
import Filter from '../filter/Filter';
import Loading from '../loading/Loading';

export default class Movies extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      data: [],
    }

    this.sortByAlphabetical = this.sortByAlphabetical.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  sortByAlphabetical = () => {
    const alphabeticalOrder = this.state.data.sort((a, b) => a.title.localeCompare(b.title));
    this.setState({data: alphabeticalOrder});
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

    const loading = this.state.loading;
    const data = this.state.data;

    const items = data.map(item => {

      let title = item.title;
      let date = item.release_date.split('-')[0];

      return (
        <li key={item.id}>
          <img src={`${"http://image.tmdb.org/t/p/w200"}${item.poster_path}`} alt={title} />
          <h3 className="movie-title">{title}</h3>
          <p className="movie-date">{date}</p>
        </li>
      );

    });

    return (
      <div className="movies">
        <h2 className="title">Tous les films</h2>
        <Filter sortByAlphabetical={this.sortByAlphabetical} />
        {loading ? (
          <Loading loading={loading} />
        ) : (
          <ul className="wrapper-all-movies">
            {items}
          </ul>
        )}
      </div>
    );
  }
}
