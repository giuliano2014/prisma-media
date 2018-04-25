import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/dist/css/swiper.min.css';

import './topten.css';
import SliderPreviousArrow from '../assets/svg/sliderpreviousarrow.svg';
import SliderNextArrow from '../assets/svg/slidernextarrow.svg';

export default class TopTen extends Component {

  constructor(props) {
    super(props)

    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.swiper = null;
  }

  goNext = () => {
    if (this.swiper) this.swiper.slideNext();
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev();
  }

  render() {

    const params = {
      slidesPerView: 4,
      spaceBetween: 80,
      slidesPerGroup: 1,
      grabCursor: true,
    };

    return (
      <div className="topten">
        <h2 className="title">Les 10 meilleurs films</h2>
        <Swiper
          {...params}
          ref={node => {if(node) this.swiper = node.swiper}}
        >
          <div>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 1</h3>
            <p className="movie-date">Date</p>
          </div>
          <div>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 2</h3>
            <p className="movie-date">Date</p>
          </div>
          <div>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 3</h3>
            <p className="movie-date">Date</p>
          </div>
          <div>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 4</h3>
            <p className="movie-date">Date</p>
          </div>
          <div>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 5</h3>
            <p className="movie-date">Date</p>
          </div>
          <div>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 6</h3>
            <p className="movie-date">Date</p>
          </div>
          <div>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 7</h3>
            <p className="movie-date">Date</p>
          </div>
          <div>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 8</h3>
            <p className="movie-date">Date</p>
          </div>
          <div>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 9</h3>
            <p className="movie-date">Date</p>
          </div>
          <div>
            <img src="https://picsum.photos/140/200" alt="" />
            <h3 className="movie-title">Title 10</h3>
            <p className="movie-date">Date</p>
          </div>
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
    );

  }

}
