import PropTypes from 'prop-types';
import React, { useEffect, useMemo } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import { ITEMS_PER_PAGE } from 'constants/numbers';

import Story from 'components/Pages/PageView/Components/Story';
import NextPage from 'components/Pages/PageView/Components/NextPage';

/**
 * Page View Component.
 *
 * @param {*} props
 *
 * @returns {Component}
 */
function PageView({
  news = [],
  match = {},
  gettingAllNewsError,
  gettingAllNews = false,
  gettingAllNewsSuccess = false,

  getAllNews = () => {}
}) {
  const { storyType = 'top', page = 1 } = match?.params;
  const currentPageNumber = parseInt(page);

  useEffect(() => {
    const newsEndpoint = storyType + 'stories.json';

    getAllNews({
      storyType: newsEndpoint
    });
  }, [storyType, getAllNews]);

  const stories = useMemo(() => {
    const previousPage = currentPageNumber - 1;
    const startItemsIndex = previousPage * ITEMS_PER_PAGE;
    const endItemsIndex = currentPageNumber * ITEMS_PER_PAGE;

    const currentPageStories = news?.slice(startItemsIndex, endItemsIndex) || [];

    return currentPageStories;
  }, [news, currentPageNumber]);

  if (gettingAllNews) {
    return (
      <div className="center mt-20 mb-20">
        <BeatLoader color="#F46526" loading={gettingAllNews} size={20} margin={5} />
      </div>
    );
  } else if (!gettingAllNews && !gettingAllNewsSuccess && gettingAllNewsError) {
    return (
      <div className="center">
        <p className="text-danger">{gettingAllNewsError}</p>
      </div>
    );
  }

  return (
    <div>
      {stories.map((storyId, index) => (
        <Story key={storyId} storyId={storyId} storyIndex={(currentPageNumber - 1) * ITEMS_PER_PAGE + index + 1} />
      ))}

      <NextPage storyType={storyType} page={page} news={news} />
    </div>
  );
}

PageView.propTypes = {
  getAllNews: PropTypes.func,
  gettingAllNews: PropTypes.bool,
  gettingAllNewsError: PropTypes.any,
  gettingAllNewsSuccess: PropTypes.bool,
  match: PropTypes.object,
  news: PropTypes.array
};

export default PageView;
