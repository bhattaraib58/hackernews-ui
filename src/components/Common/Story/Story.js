import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import CircleLoader from 'react-spinners/CircleLoader';

import useFetchItem from 'hooks/useFetchItem';

import ROUTES from 'constants/routes';
import upvoteArrow from 'assets/images/grayArrow.gif';

import { interpolate } from 'utils/httpUtil';
import { extractHostname, getTimeDifference } from 'utils/utils';

import styles from './Story.module.css';

/**
 * Individual Story Component.
 *
 * @param {*} props
 * @returns {Component}
 */
function Story({ storyId = 0, storyIndex = 0, isStoryDiscussion = false, setStoryInfo = () => {} }) {
  const { item: story, gettingItem, gettingItemError, gettingItemSuccess } = useFetchItem(storyId);

  useEffect(() => {
    if (isStoryDiscussion) {
      setStoryInfo({ story, gettingItem, gettingItemError, gettingItemSuccess });
    }
  }, [story, gettingItem, gettingItemError, gettingItemSuccess, isStoryDiscussion, setStoryInfo]);

  if (gettingItem) {
    const Loader = isStoryDiscussion ? BeatLoader : CircleLoader;

    return (
      <div className="center mt-20 mb-20">
        <Loader color="#F46526" loading={gettingItem} size={20} margin={5} />
      </div>
    );
  } else if (!gettingItem && !gettingItemSuccess && gettingItemError) {
    return (
      <div className="center">
        <p className="text-danger">{gettingItemError}</p>
      </div>
    );
  }

  const siteUrl = story.url;
  const hostName = siteUrl ? extractHostname(story.url) : '';

  return (
    <div className={styles.container}>
      {storyIndex && <div className={styles.storyIndex}>{storyIndex}. </div>}
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
          <h3 className={styles.title}>
            {story.type !== 'comment' ? story.title : <div dangerouslySetInnerHTML={{ __html: story.text }} />}
          </h3>
        )}

        <ul className={`align-center ${styles.links}`}>
          <li>
            {story.score || 0} points by {story.by}
          </li>
          <li>{getTimeDifference(story.time)}</li>
          <li>
            <Link
              to={interpolate(ROUTES.STORY_DISCUSSION, {
                storyId: story.id
              })}
            >
              {story.kids ? story.kids.length + ' comments' : ' discuss'}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

Story.propTypes = {
  isStoryDiscussion: PropTypes.bool,
  setStoryInfo: PropTypes.func,
  storyId: PropTypes.number,
  storyIndex: PropTypes.number
};

export default Story;
