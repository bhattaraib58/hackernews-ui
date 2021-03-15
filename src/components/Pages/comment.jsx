import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { getTimeDiff } from '../../utils/utils';
import * as HTTPHelpers from '../../services/http';

import Loading from '../loading';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userComment: null,
      loading: true
    };

    this._isMounted = false;
    this.renderComment = this.renderComment.bind(this);
  }

  async componentDidMount() {
    this._isMounted = true;

    const userComment = await HTTPHelpers.default.getById(
      HTTPHelpers.BASE_URL + 'item/' + this.props.commentId + '.json'
    );

    if (this._isMounted) {
      this.setState({
        userComment,
        loading: false
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  renderComment() {
    const userComment = this.state.userComment;

    return userComment.type !== 'comment' ? null : (
      <>
        <div className="comment-body clearfix">
          <div className="upvote" />
          <div className="title">
            <ul>
              <li>by {userComment.by}</li>
              <li>{getTimeDiff(userComment.time)}</li>
            </ul>
            <div className="comment-text" dangerouslySetInnerHTML={{ __html: userComment.text }} />
            {/* only random hack for displaying ancor tag */}
            <div className="reply">
              <a href={'#' + userComment.id}>reply</a>
            </div>
          </div>
        </div>

        {userComment.kids &&
          userComment.kids.length > 0 &&
          userComment.kids.map((commentId) => (
            <div className="user-sub-comment clearfix" key={commentId}>
              <Comment commentId={commentId} key={commentId} />
            </div>
          ))}
      </>
    );
  }

  render() {
    return <div className="user-comment clearfix">{this.state.loading ? <Loading /> : this.renderComment()}</div>;
  }
}

Comment.propTypes = {
  commentId: PropTypes.any
};

export default Comment;
