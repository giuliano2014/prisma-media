import React, { Component } from 'react';
import { ScaleLoader } from 'react-spinners';

import './loading.css';

export default class Loading extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: this.props.loading,
    };
  }

  render() {
    return (
      <div className="loading">
        <ScaleLoader
          color={'#ffffff'}
          width={3}
          height={24}
          radius={50}
          loading={this.state.loading}
        />
      </div>
    );
  }

}
