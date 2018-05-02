import React, { Component } from 'react';
import Moment from 'moment';

import './movies.css';
import Filter from '../filter/Filter';
import Loading from '../loadings/Loading';
import Loading2 from '../loadings/Loading2';

export default class Movies extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      data: [],
      counter: 1,
      loadingInfiniteScroll: false,
    }

    this.sortByAlphabetical = this.sortByAlphabetical.bind(this);
    this.filterByYear = this.filterByYear.bind(this);
  }

  componentDidMount() {
    this.displayMovies();
    window.addEventListener('scroll', this.infiniteScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll, false);
  }

  sortByAlphabetical = () => {
    const alphabeticalOrder = this.state.data.sort((a, b) => a.title.localeCompare(b.title));
    this.setState({data: alphabeticalOrder});
  }

  filterByYear = (date) => {
    const formatDate = Moment(date).format('YYYY');
    console.log(formatDate);
  }

  infiniteScroll = () => {

    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight)) {

      this.setState(prevState => {
        return {
          counter: prevState.counter + 1,
          loadingInfiniteScroll: true,
        };
      }, () => {
        this.getMovies()
          .then(res => {
            this.setState((prevState) => {
              return {data: prevState.data.concat(res)};
            });
          })
          .then(res => {
            this.setState({loadingInfiniteScroll: false});
          })
          .catch(err => console.log('Request failed', err));
      });

    }

  }

  getMovies = () => {
    return (
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0bc8f854ea8928cf462490e9efaa2f9c&sort_by=popularity.desc&page=${this.state.counter}`)
        .then(res => res.json())
        .then(res => res.results)
    );
  }

  displayMovies = () => {
    this.getMovies()
      .then(res => {
        this.setState({
          loading: false,
          data: res,
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
        <Filter
          sortByAlphabetical={this.sortByAlphabetical}
          filterByYear={this.filterByYear}
        />
        {loading ? (
          <Loading loading={loading} />
        ) : (
          items.length > 0 ? (
            <div>
              <ul className="wrapper-all-movies">
                {items}
              </ul>
              <Loading2 loading={this.state.loadingInfiniteScroll} />
            </div>
          ) : (
            <p className="error-message">Oops... Aucun film ne correspond à votre recherche</p>
          )
        )}
      </div>
    );
    
  }

}
