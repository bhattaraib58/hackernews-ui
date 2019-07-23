export const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';



/**
 * Fetch All using GET 
 *
 * @param {*} url -full url of get
 * @returns
 */
function getAll(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}


/**
 * Fetch data of one by id
 * 
 *
 * @param {*} url
 * @returns
 */
function getById(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}


/**
 * Add new Data
 *
 * @param {*} url
 * @param {*} data
 * @returns
 */
function post(url, data) {
  // Create a new user
  return fetch(url,
    {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify(data),
    });
}


/**
 * Update data in url
 *
 * @param {*} url
 * @param {*} data
 * @returns
 */
function put(url, data) {
  return fetch(url,
    {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'PUT',
      body: JSON.stringify(data),
    });
}

/**
 * Remove/ Delete from api
 *
 * @param {*} url
 * @returns
 */
function remove(url) {
  return fetch(url, {
    method: 'DELETE',
  });
}


export default {
  getAll,
  getById,
  post,
  put,
  delete: remove,
};