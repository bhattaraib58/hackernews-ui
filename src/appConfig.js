import { version, name } from '../package.json';

/**
 * Application wide configuration.
 */
const appConfig = {
  baseApiURI: process.env.REACT_APP_BASE_API_URI,
  devMode: process.env.NODE_ENV === 'development',
  isProdMode: process.env.NODE_ENV === 'production',
  app: {
    name: name || 'Hacker News',
    version: version || '1.2.5'
  }
};

export default appConfig;
