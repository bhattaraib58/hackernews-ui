import React, { Component } from 'react';
import Story from './story';
import * as HTTPHelpers from '../services/Http/http';

class PageView extends Component {
  async componentDidMount() {
    let news = await HTTPHelpers.default.getAll(HTTPHelpers.BASE_URL + this.props.newsFilter);
    this.props.setNews(news.slice(0, 15));
  }

  render() {
    return (
      <div className="news-grid page-content">
        {
          this.props.news.map((storyId,index) => <Story storyId={storyId} key={storyId} index={index+1}/>)
        }
      </div>
    );
  }
}

export default PageView;

