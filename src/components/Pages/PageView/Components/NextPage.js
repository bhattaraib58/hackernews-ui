import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';

import ROUTES from 'constants/routes';
import { ITEMS_PER_PAGE } from 'constants/numbers';

import { interpolate } from 'utils/httpUtil';

/**
 * Next Page Component.
 * Shows Option to goto Next page or Not based on remaining Items.
 *
 * @param {*} props
 * @returns {Component}
 */
function NextPage({ storyType = '', page = 0, news = [] }) {
  const currentPageNumber = parseInt(page);
  const pagesRemaining = parseInt(news?.length / (currentPageNumber * ITEMS_PER_PAGE)) || 0;

  if (pagesRemaining > 0) {
    const nextPageNumber = currentPageNumber + 1;
    const nextPageRoute = interpolate(ROUTES.STORY_TYPE_WITH_PAGE, { storyType, page: nextPageNumber });

    return (
      <div className="mt-20 ml-40">
        <Link to={nextPageRoute}>More</Link>
      </div>
    );
  }

  return null;
}

NextPage.propTypes = {
  news: PropTypes.array,
  storyType: PropTypes.string,
  page: PropTypes.number
};

export default NextPage;
