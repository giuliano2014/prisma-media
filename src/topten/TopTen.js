import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/dist/css/swiper.min.css';

import './topten.css';
import SliderPreviousArrow from '../assets/svg/sliderpreviousarrow.svg';
import SliderNextArrow from '../assets/svg/slidernextarrow.svg';
import Loading from '../loading/Loading';

export default class TopTen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      data: [],
    }

    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.swiper = null;
  }

  componentDidMount() {
    this.getTopTen();
  }

  goNext = () => {
    if (this.swiper) this.swiper.slideNext();
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev();
  }

  getTopTen = () => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=0bc8f854ea8928cf462490e9efaa2f9c&certification=R&sort_by=vote_average.desc')
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

    const params = {
      slidesPerView: 4,
      spaceBetween: 80,
      slidesPerGroup: 1,
      grabCursor: true,
    };

    const data = this.state.data.slice(0, 10);

    const items = data.map(item => {

      let title = item.title;
      let formatTitle = title.length > 30 ? title.substr(0, 30) + '...' : title;
      let date = item.release_date.split('-')[0];

      return (
        <div key={item.id}>
          <img src={`${"http://image.tmdb.org/t/p/w200"}${item.poster_path}`} alt={title} />
          <h3 className="movie-title">{formatTitle}</h3>
          <p className="movie-date">{date}</p>
        </div>
      );

    });

    return (
      <div className="topten">
        <h2 className="title">Les 10 meilleurs films</h2>
        {loading ? (
          <Loading loading={loading} />
        ) : (
          <div>
            <Swiper
              {...params}
              ref={node => {if(node) this.swiper = node.swiper}}
            >
              {items}
            </Swiper>
            <span className="button-prev" onClick={this.goPrev}>
              <img
                src={SliderPreviousArrow}
                alt="Précédent"
              />
            </span>
            <span className="button-next" onClick={this.goNext}>
              <img
                src={SliderNextArrow}
                alt="Suivant"
              />
            </span>
          </div>
        )}
      </div>
    );

  }

}
