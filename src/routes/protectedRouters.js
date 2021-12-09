import { Suspense } from 'react';
import Loader from "react-loader-spinner";
import { Route, Switch } from 'react-router-dom';
import routes from './routes'; // Route list

const ProtectedRoutes = () => (
  <Switch>
    <Suspense
      fallback={<Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />}
    >
      {routes.map(({ component: Component, path, exact }) => (
        <Route
          path={`/${path}`}
          key={path}
          exact={exact}
        >
          <Component />
        </Route>
      ))}
   </Suspense>
  </Switch>
);

export default ProtectedRoutes;