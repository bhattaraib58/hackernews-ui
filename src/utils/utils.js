import { get as getHostName } from 'psl';

/**
 * Get the Time Difference From the Current Time.
 *
 * @param {number} previousTime
 *
 * @returns {String}
 */
export function getTimeDifference(previousTime) {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = Date.now() - previousTime * 1000;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago';
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + ' days ago';
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + ' months ago';
  } else {
    return Math.round(elapsed / msPerYear) + ' years ago';
  }
}

/**
 * Get Host Name of Site From Full URL.
 *
 * @param {String} url
 *
 * @returns {String}
 */
export function extractHostname(url) {
  let hostname;

  // find & remove protocol (http, ftp, etc.) and get hostname
  if (url.indexOf('//') > -1) {
    hostname = url.split('/')?.[2] || '';
  } else {
    hostname = url.split('/')?.[0] || '';
  }

  // find & remove port number
  hostname = hostname.split(':')?.[0] || '';

  // find & remove "?"
  hostname = hostname.split('?')?.[0] || '';

  // get site name
  return getHostName(hostname);
}
