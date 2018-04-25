import React, { Component } from 'react';

import './filter.css';
import DropDownArrowIcon from '../assets/svg/dropdownarrow.svg';

export default class Filter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      filterByCurrentText: 'Genre',
    };

    this.toggleActiveClass= this.toggleActiveClass.bind(this);
  }

  toggleActiveClass = (event) => {
    this.setState({
      active: !this.state.active,
      filterByCurrentText: event.target.textContent,
    });
  }

  render() {
    return (
      <div className="filter">

        <div className="sort-by">
          <label>Trier par : </label>
          <span className="wrapper-button-sort-by">
            <button>Ordre alphabétique</button>
            <img
              className="dropdownarrow-icon"
              src={DropDownArrowIcon}
              alt="Filtrer par genre"
            />
          </span>
        </div>

        <div className="filter-by">
          <label>Filtrer par : </label>
          <ul className={this.state.active ? 'active' : null}>
            <img
              className="dropdownarrow-icon"
              src={DropDownArrowIcon}
              alt="Filtrer par genre"
            />
            <button onClick={this.toggleActiveClass}>
              {this.state.filterByCurrentText}
            </button>
            <li onClick={this.toggleActiveClass}>Tous</li>
            <li onClick={this.toggleActiveClass}>Action</li>
            <li onClick={this.toggleActiveClass}>Horreur</li>
            <li onClick={this.toggleActiveClass}>Amour</li>
          </ul>
        </div>

      </div>
    );
  }
}
