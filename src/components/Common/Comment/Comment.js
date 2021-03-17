import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import GridLoader from 'react-spinners/GridLoader';

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
  const [isCommentCollapsed, setIsCommentCollapsed] = useState(false);
  const { item: userComment, gettingItem, gettingItemError, gettingItemSuccess } = useFetchItem(commentId);

  if (gettingItem) {
    return (
      <div className="d-flex mt-40 mb-40 ml-20">
        <GridLoader color="#F46526" loading={gettingItem} size={10} />
      </div>
    );
  } else if (!gettingItem && !gettingItemSuccess && gettingItemError) {
    return (
      <div className="center">
        <p className="text-danger">{gettingItemError}</p>
      </div>
    );
  } else if (userComment?.type !== 'comment') {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <div className="align-center">
          <div
            className={`${styles.upvote} ${isCommentCollapsed ? styles.visibilityHidden : ''}`}
            style={{
              background: `url(${upvoteArrow}) center center / 10px 10px no-repeat`
            }}
          />

          <ul className={`align-center ${styles.links}`}>
            <li>{userComment.by}</li>
            <li>{getTimeDifference(userComment.time)}</li>
          </ul>

          <div className={styles.expandHide} onClick={() => setIsCommentCollapsed(!isCommentCollapsed)}>
            [{isCommentCollapsed ? '+' : '-'}]
          </div>
        </div>

        <div className={`ml-20 ${styles.commentMessage} ${isCommentCollapsed ? styles.displayNone : ''}`}>
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

      <div className={`ml-20 ${isCommentCollapsed ? styles.displayNone : ''}`}>
        {userComment?.kids?.map((commentId) => (
          <Comment key={commentId} commentId={commentId} />
        ))}
      </div>
    </>
  );
}

Comment.propTypes = {
  commentId: PropTypes.any
};

export default Comment;
