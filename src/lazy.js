import Loadable from 'react-loadable';

import Loading from './components/Loading';

export const Home = Loadable({
  loader: () => import('./components/Home'),
  loading: Loading,
});

export const Messages = Loadable({
  loader: () => import('./components/messages/Messages'),
  loading: Loading,
});

export const Stats = Loadable({
  loader: () => import('./components/stats/Stats'),
  loading: Loading,
});
