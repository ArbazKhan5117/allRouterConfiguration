import { lazy } from 'react';

const routes = [
  {
    path: 'home',
    component: lazy(() => import('./../components/home/home')),
    exact: true
  },
  {
    path: 'users',
    component: lazy(() => import('./../components/users/users')),
    exact: true
  }
];

export default routes;