import React, { Component } from 'react';
import { getTimeDiff } from '../utils/utils';
import * as HTTPHelpers from '../services/Http/http';
import Loading from './loading';

export class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      story: null,
      loading: true,
    };
  }

  async componentDidMount() {
    let story = await HTTPHelpers.default.getById(
      HTTPHelpers.BASE_URL + 'item/' + this.props.storyId + '.json'
    );
    this.setState({
      story,
      loading: false,
    });
  }

  renderStory() {
    let story = this.state.story;
    return (
      <>
        <div className="rank">{this.props.index}. </div>
        <div className="title">
          {story.url ? (
            <a href={story.url}>
              <h3>{story.title}</h3>
            </a>
          ) : (
            <h3>{story.title}</h3>
          )}
          
          <ul>
            <li>{story.score} points</li>
            <li>by {story.by}</li>
            <li>{getTimeDiff(story.time)}</li>
            {story.kids ? <li>| {story.kids.length} comments</li> : null}
          </ul>
        </div>
      </>
    );
  }

  render() {
    return (
      <>
        <div className="story-wrap clearfix">
          {this.state.loading ? <Loading /> : this.renderStory()}
        </div>
      </>
    );
  }
}

export default Story;
