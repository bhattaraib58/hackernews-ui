import React, { Component } from 'react';

import Loading from './loading';
import withStory from '../hoc/withStory';

export class Story extends Component {
  
  render() {
    return (
      <>
        <div className="story-wrap clearfix">
          {this.props.loading ? <Loading /> : this.props.renderStory()}
        </div>
      </>
    );
  }
}

export default withStory(Story);
