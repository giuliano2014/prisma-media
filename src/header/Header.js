import React, { Component } from 'react';

import './header.css';
import Logo from '../assets/svg/logo.svg';
import SearchIcon from '../assets/svg/searchicon.svg';

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('A name was submitted: ' + this.state.value);
  }

  handleInputChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="header">
        <img
          className="logo"
          src={Logo}
          alt="Movie finder"
        />
        <form
          onSubmit={this.handleFormSubmit}
          className="search-form"
        >
          <input
            className="search-input"
            type="text"
            name="searchBar"
            value={this.state.value}
            onChange={this.handleInputChange}
            placeholder="Rechercher un film"
          />
          <img
            onClick={this.handleFormSubmit}
            className="search-icon"
            src={SearchIcon}
            alt="Rechercher un film"
          />
        </form>
      </div>
    );
  }

}
