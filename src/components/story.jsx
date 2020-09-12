import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Loading from './loading';
import withStory from '../hoc/withStory';

export class Story extends Component {
  render() {
    return (
      <>
        <div className="story-wrap clearfix">{this.props.loading ? <Loading /> : this.props.renderStory()}</div>
      </>
    );
  }
}

Story.propTypes = {
  loading: PropTypes.bool,
  renderStory: PropTypes.func
};

export default withStory(Story);
