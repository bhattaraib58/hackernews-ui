import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import CircleLoader from 'react-spinners/CircleLoader';

import useFetchItem from 'hooks/useFetchItem';

import ROUTES from 'constants/routes';
import upvoteArrow from 'assets/images/grayArrow.gif';

import { interpolate } from 'utils/httpUtil';
import { getTimeDifference } from 'utils/utils';

import styles from './Comment.module.css';

/**
 * Individual Comment Component.
 *
 * @param {*} props
 * @returns {Component}
 */
function Comment({ commentId }) {
  const { item: userComment, gettingItem, gettingItemError, gettingItemSuccess } = useFetchItem(commentId);

  if (gettingItem) {
    return (
      <div className="center mt-20 mb-20">
        <CircleLoader color="#F46526" loading={gettingItem} size={20} />
      </div>
    );
  } else if (!gettingItem && !gettingItemSuccess && gettingItemError) {
    return (
      <div className="center">
        <p className="text-danger">{gettingItemError}</p>
      </div>
    );
  } else if (userComment.type !== 'comment') {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <div className="align-center">
          <div
            className={styles.upvote}
            style={{
              background: `url(${upvoteArrow}) center center / 10px 10px no-repeat`
            }}
          />

          <ul className={`align-center ${styles.links}`}>
            <li>{userComment.by}</li>
            <li>{getTimeDifference(userComment.time)}</li>
          </ul>
        </div>

        <div className={`ml-20 ${styles.commentMessage}`}>
          <div dangerouslySetInnerHTML={{ __html: userComment.text }} />

          <Link
            className={styles.reply}
            to={interpolate(ROUTES.STORY_DISCUSSION, {
              storyId: userComment.id
            })}
          >
            reply
          </Link>
        </div>
      </div>

      {userComment?.kids?.map((commentId) => (
        <div className="ml-20" key={commentId}>
          <Comment commentId={commentId} key={commentId} />
        </div>
      ))}
    </>
  );
}

Comment.propTypes = {
  commentId: PropTypes.any
};

export default Comment;
