import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import CircleLoader from 'react-spinners/CircleLoader';

import { getStory } from 'services/story';
import { getTimeDifference } from 'utils/utils';

/**
 * Individual Story Component.
 *
 * @param {*} props
 * @returns {Component}
 */
function Story({ storyId = 0, storyIndex = 0 }) {
  const [gettingStory, setGettingStory] = useState(true);
  const [gettingStoryError, setGettingStoryError] = useState(null);
  const [gettingStorySuccess, setGettingStorySuccess] = useState(false);

  const [story, setStory] = useState({});

  useEffect(() => {
    // const storyId = this.props.storyId || this.props.match.params.id || 12;

    /**
     * Fetch Story Data based on storyId.
     *
     */
    async function fetchStoryData() {
      try {
        setGettingStory(true);
        const story = await getStory(storyId + '.json');

        setStory(story);
        setGettingStory(false);
        setGettingStoryError(null);
        setGettingStorySuccess(true);
      } catch (error) {
        setGettingStory(false);
        setGettingStorySuccess(false);
        setGettingStoryError(error?.message || 'Error Fetching Story');
      }
    }

    fetchStoryData();
  }, [storyId]);

  if (gettingStory) {
    return (
      <div className="center mt-20 mb-20">
        <CircleLoader color="#F46526" loading={gettingStory} size={20} />
      </div>
    );
  } else if (!gettingStory && !gettingStorySuccess && gettingStoryError) {
    return (
      <div className="center">
        <p className="text-danger">{gettingStoryError}</p>
      </div>
    );
  }

  return (
    <div className="story-wrap clearfix mb-10">
      {storyIndex ? <div className="rank">{storyIndex}. </div> : null}
      <div className="upvote" />
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
          <li>{getTimeDifference(story.time)}</li>
          <li>
            |&nbsp;
            <Link to={'/item/' + story.id}>{story.kids ? story.kids.length + ' comments' : ' discuss'} </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

Story.propTypes = {
  storyId: PropTypes.number,
  storyIndex: PropTypes.number
};

export default Story;
