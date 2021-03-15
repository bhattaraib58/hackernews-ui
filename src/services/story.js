import { get, interpolate } from 'utils/httpUtil';

import endpoints from 'constants/endpoints';

/**
 * Fetch Single Story By Story Id.
 *
 * @param {string} storyId
 *
 * @returns {object}
 */
export async function getStory(storyId) {
  const url = interpolate(endpoints.story, { storyId });
  const { data } = await get(url);

  return data;
}
