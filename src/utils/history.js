import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// this listens for a route change, and scrolls to the  top of the screen each time it changes
// the back/forward buttons will push and pop, but will not hit this listener & scroll to the top
history.listen(() => {
  window.scrollTo(0, 0);
});

export default history;
