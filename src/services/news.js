import { get, interpolate } from 'utils/httpUtil';

import endpoints from 'constants/endpoints';

/**
 * Fetch All News By News Type.
 *
 * @param {string} storyType
 *
 * @returns {object}
 */
export async function getAllNews(storyType) {
  const url = interpolate(endpoints.news, { storyType });
  const { data } = await get(url);

  return data;
}
