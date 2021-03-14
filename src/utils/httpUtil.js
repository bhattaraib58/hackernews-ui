import axios from 'axios';

const http = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
 * Http GET.
 *
 * @param {string} url
 * @param {Object} params
 * @returns {Promise}
 */
export function get(url, params = {}) {
  const request = {
    method: 'get',
    url: url,
    params: params
  };

  return http(request);
}

/**
 * Http POST.
 *
 * @param {string} url
 * @param {Object} data
 * @returns  {Promise}
 */
export function post(url, data = {}) {
  const request = {
    method: 'post',
    url: url,
    data: data
  };

  return http(request);
}

/**
 * Http PUT.
 *
 * @param {string} url
 * @param {Object} data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  const request = {
    method: 'put',
    url: url,
    data: data
  };

  return http(request);
}

/**
 * Http DELETE.
 *
 * @param {string} url
 * @param {Object} data
 * @returns {Promise}
 */
export function remove(url, data = {}) {
  const request = {
    method: 'delete',
    data,
    url
  };

  return http(request);
}

/**
 * Check the error received and perform action based on it.
 */
http.interceptors.response.use(
  (response) => response,
  (error) => generateErrorHelper(error)
);

/**
 * Auto adds the bearer token in Authorization Header.
 */
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

/**
 * Handle error responses.
 *
 * @param {*} error
 * @returns
 */
function generateErrorHelper(error) {
  const errorResponse = error?.response ?? error;
  const statusCode = errorResponse?.status ?? error?.response?.data?.error ?? '';

  const errorInfo = {
    statusCode,
    message: errorResponse?.data?.errorResponse ?? {},
    errorDetail: error
  };

  // If server sent an error, override it here
  if (errorResponse?.data?.message) {
    errorInfo.message = errorResponse.data.message;
  } else if (errorResponse?.data?.error?.message) {
    errorInfo.message = errorResponse.data.error.message;
  } else if (errorResponse?.message) {
    errorInfo.message = errorResponse.message;
  } else if (errorResponse?.statusText) {
    errorInfo.message = errorResponse.statusText;
  }

  return Promise.reject(errorInfo);
}

/**
 * Build supplied string by interpolating properties after delimiter ':' with the given parameters.
 *
 * @example
 * interpolate(':name is here.', {name: 'Colly'})
 * => 'Colly is here.'
 *
 * @param {string} str
 * @param {object} params
 * @param {object} queries
 *
 * @returns String.
 */
export function interpolate(str, params, queries = {}) {
  if (typeof str !== 'string') {
    throw new TypeError('First Argument must be a string');
  }
  let formattedString = str;

  params = params || {}; // default params won't resolve to {} if null is passed.
  for (const [key, value] of Object.entries(params)) {
    const val = value || '';

    formattedString = formattedString.replace(new RegExp(':' + key + '\\b', 'gi'), val.toString());
  }

  if (Object.values(queries).filter((a) => a).length) {
    formattedString += '?';
    Object.entries(queries).forEach(([name, value]) => {
      if (name && value) {
        formattedString += `${name}=${value}&`;
      }
    });
    formattedString = formattedString.slice(0, formattedString.length - 1);
  }

  return formattedString;
}
