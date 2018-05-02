import React, { Component } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import './filter.css';
import DropDownArrowIcon from '../assets/svg/dropdownarrow.svg';

export default class Filter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sortByAlphabetical: this.props.sortByAlphabetical,
      filterByYear: this.props.filterByYear,
      active: false,
      filterByCurrentText: 'Genre',
    };

    this.toggleActiveClass = this.toggleActiveClass.bind(this);
  }

  toggleActiveClass = (event) => {
    const currentValue = event.target.textContent || event.target.getAttribute('current-value');
    this.setState({
      active: !this.state.active,
      filterByCurrentText: currentValue,
    });
  }

  render() {

    return (

      <div className="filter">

        <div className="sort-by">
          <label>Trier par : </label>
          <span
            onClick={this.state.sortByAlphabetical}
            className="wrapper-button-sort-by"
          >
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
            <div className="filter-by-wrapper">
              <button onClick={this.toggleActiveClass}>
                {this.state.filterByCurrentText}
                <img
                  onClick={this.toggleActiveClass}
                  className="dropdownarrow-icon"
                  src={DropDownArrowIcon}
                  alt="Filtrer par genre"
                  current-value={this.state.filterByCurrentText}
                />
              </button>
              <li onClick={this.toggleActiveClass}>Tous</li>
              <li onClick={this.toggleActiveClass}>Action</li>
              <li onClick={this.toggleActiveClass}>Horreur</li>
              <li onClick={this.toggleActiveClass}>Amour</li>
            </div>
          </ul>
          <Datetime
            onChange={(e) => this.state.filterByYear(e._d)}
            dateFormat="YYYY"
            timeFormat={false}
            defaultValue="Année"
            closeOnSelect={true}
          />
        </div>

      </div>

    );

  }

}
