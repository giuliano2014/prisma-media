import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';

import './loading.css';

export default class Loading2 extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: this.props.loadingInfiniteScroll,
    }
  }

  render() {
    return (
      <div className="loading">
        <PulseLoader
          color={'#ffffff'}
          loading={this.state.loading}
        />
      </div>
    );
  }
  
}
