import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter
} from 'react-router-dom';
import PrivateRoute from './routes/privateRouters';
import ProtectedRoutes from './routes/protectedRouters';
import PublicRoute from './routes/publicRouters';
import './styles/app.scss';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Users from './components/users/users';
function App() {
  const isAuthenticated = true;
  
  return (
    <div className="App">
      {console.log(isAuthenticated)}
      <header className="App-header">
        <h1 className="heading">React with SAAS</h1>
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
