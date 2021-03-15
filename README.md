<div align="center">
  <a href="https://github.com/bhattaraib58/hackernews-ui">
    <img width="128px" src="public/favicon.ico"/>
  </a>
  <br/>

# Hackernews UI

</div>

Hackernews UI is an web application made in React.js using Hooks API. It is created with Redux, Redux-Persist, Redux-Saga, and @reduxjs/toolkit.

The whole project uses custom css without using any CSS Library.

## Setup

### Clone the repository

```bash
# Clone with SSH
$ git clone git@github.com:bhattaraib58/hackernews-ui.git

# Or with HTTPS
$ git clone https://github.com/bhattaraib58/hackernews-ui.git
```

## Prerequisites

- [Node.js v10](https://yarnpkg.com/en/docs/install)
- [Yarn v1](https://yarnpkg.com/en/docs/install)
- [NPM v6](https://docs.npmjs.com/getting-started/installing-node)

## File structure

```
src/
├── appConfig.js   => represents app system wide configuration
├── assets/        => represents images and global styles
├── components/    => all react components
├── constants/     => constant data
├── services/      => http request services
└── utils/         => helper functions
```

#### Install dependencies

```bash
# Using npm
$ npm install

# Or using yarn
$ yarn
```

**Note:** This project uses yarn as main package manager.

### Practices Involved in development:

1. The app should uses react (use Hooks API and hook pattern).

   - Building Your Own Hooks - https://reactjs.org/docs/hooks-custom.html
   - React Redux Hooks API - https://react-redux.js.org/api/hooks

2. For css styling

   We use CSS Modules in React to handle styling, use this guide for more info https://programmingwithmosh.com/react/css-modules-react/

## For Development

```bash
# Using npm
$ npm start

# Or using yarn
$ yarn start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## For Production Build

```bash
# Using npm
$ npm run build
$ npx serve -s build

# Or using yarn
$ yarn build
$ npx serve -s build
```

Builds the production optimized app to the `build` folder.<br>
Your app is ready to be deployed!

## Contributing

Read our [CONTRIBUTING GUIDE](CONTRIBUTING.md) to learn about our development process, how to propose bugs and improvements.

## License

Licensed under [The License](LICENSE).
