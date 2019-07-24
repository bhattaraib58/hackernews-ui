import React, { Component } from 'react';

import withStory from '../hoc/withStory';
import Loading from './loading';
import Comment from './comment';

class CommentView extends Component {
  displayUserComment() {
    return (
      <form action="#" className="user-form">
        <textarea name="text" rows="6" cols="60" />
        <input type="submit" value="add comment" />
      </form>
    );
  }

  render() {
    return (
      <div className="comment-wrapper">
        {this.props.loading ? (
          <Loading />
        ) : (
          <>
            <div className="clearfix">{this.props.renderStory()}</div>

            {this.displayUserComment()}
          </>
        )}

        {this.props.story &&
          this.props.story.kids &&
          this.props.story.kids.map(commentId => (
            <Comment commentId={commentId} key={commentId} />
          ))}
      </div>
    );
  }
}

export default withStory(CommentView);
