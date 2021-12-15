import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './routes/privateRouters';
import ProtectedRoutes from './routes/protectedRouters';
import PublicRoute from './routes/publicRouters';
import './styles/app.scss';
import { initialState } from './redux/reducers/state';
import Login from './components/login/login';
import Signup from './components/signup/signup';
function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const isAuthenticated = state?.value;
  console.log(state?.value);
  return (
    <div className="App">
     
      <header className="App-header">
        <h1 className="heading">(React with SAAS) and redux, routes(private, public, protected, authToken) configuration implemented </h1>
        <BrowserRouter>
        <Switch>
        <PublicRoute
            path="/login"
            isAuthenticated={isAuthenticated}
          >
            <Login />
          </PublicRoute>
          <PublicRoute
            path="/signup"
            isAuthenticated={isAuthenticated}
          >
            <Signup />
          </PublicRoute>
          <PrivateRoute
            path="/"
            isAuthenticated={isAuthenticated}
          >
            <ProtectedRoutes />
          </PrivateRoute>
        </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
