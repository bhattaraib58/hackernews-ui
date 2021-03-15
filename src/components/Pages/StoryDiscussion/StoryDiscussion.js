import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Story from 'components/Pages/PageView/Components/Story';
import Comment from 'components/Pages/StoryDiscussion/Comment';

import styles from './StoryDiscussion.module.css';

/**
 * Story Discussion Component.
 *
 * @param {*} props
 *
 * @returns {Component}
 */
function StoryDiscussion({ match = {} }) {
  const storyId = parseInt(match?.params?.storyId || '');

  const [storyInfo, setStoryInfo] = useState({});
  const { story, gettingItemSuccess } = storyInfo;

  return (
    <div className="mt-10 ml-10">
      <Story key={storyId} storyId={storyId} storyIndex={null} isStoryDiscussion={true} setStoryInfo={setStoryInfo} />

      {gettingItemSuccess && (
        <>
          <form action="#" className={styles.userForm}>
            <textarea name="text" rows="6" cols="60" />
            <input type="submit" value="add comment" />
          </form>

          {story?.kids?.map((commentId) => (
            <Comment key={commentId} commentId={commentId} />
          ))}
        </>
      )}
    </div>
  );
}

StoryDiscussion.propTypes = {
  match: PropTypes.object
};

export default StoryDiscussion;
