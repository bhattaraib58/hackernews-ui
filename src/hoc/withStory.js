import React from 'react';
import { Link } from 'react-router-dom';

import * as HTTPHelpers from '../services/Http/http';
import withRouterAndConnect from './withRouterAndConnect';
import { getTimeDiff } from '../utils/utils';

function withStory(WrappedComponent) {
  const EnhancedComponent = withRouterAndConnect(WrappedComponent);

  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        story: null,
        loading: true,
      };
      this.renderStory = this.renderStory.bind(this);
    }

    async componentDidMount() {
      let storyId = this.props.storyId || this.props.match.params.id || 12;
      let story = await HTTPHelpers.default.getById(
        HTTPHelpers.BASE_URL + 'item/' + storyId + '.json'
      );
      this.setState({
        story,
        loading: false,
      });
    }

    renderStory() {
      let story = this.state.story;
      return (story.type !== 'story' ? null :
        <>
          {
            this.props.index ?
              <div className="rank">{this.props.index}. </div>
              : null
          }
          <div className="upvote" />
          <div className="title">
            {story.url ? (
              <a href={story.url}>
                <h3>{story.title}</h3>
              </a>) : (<h3>{story.title}</h3>)}

            <ul>
              <li>{story.score} points</li>
              <li>by {story.by}</li>
              <li>{getTimeDiff(story.time)}</li>
              <li>|&nbsp;<Link to={'/item/' + story.id}>
                {story.kids ? story.kids.length + ' comments' : ' discuss'} </Link>
              </li>
            </ul>
          </div>
        </>
      );
    }

    render() {
      return <EnhancedComponent
        story={this.state.story}
        loading={this.state.loading}
        renderStory={this.renderStory}
        {...this.props} />;
    }

  };
}

export default withStory;
