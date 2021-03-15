import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import CircleLoader from 'react-spinners/CircleLoader';

import upvoteArrow from 'assets/images/grayarrow2x.gif';

import { getStory } from 'services/story';
import { extractHostname, getTimeDifference } from 'utils/utils';

import styles from './Story.module.css';

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

  const siteUrl = story.url;
  const hostName = siteUrl ? extractHostname(story.url) : '';

  return (
    <div className={styles.container}>
      <div className={styles.storyIndex}>{storyIndex}. </div>
      <div
        className={styles.upvote}
        style={{
          background: `url(${upvoteArrow}) center center / 10px 10px no-repeat`
        }}
      />

      <div>
        {siteUrl ? (
          <a className="align-center" href={siteUrl}>
            <h3 className={styles.title}>{story.title}</h3>
            <span className={styles.hostName}>({hostName})</span>
          </a>
        ) : (
          <h3 className={styles.title}>{story.title}</h3>
        )}

        <ul className={`align-center ${styles.links}`}>
          <li>
            {story.score} points by {story.by}
          </li>
          <li>{getTimeDifference(story.time)}</li>
          <li>
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
