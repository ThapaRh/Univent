import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
//these are for routing


import Auth from "./user/pages/Auth";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  /*<Route path="/"> given a specific path in the url, components or pages between closing braces of 
  route will be rendered when that url starts with that specific path name
  Add exact key word <Route path="/" exact> for only that exact url to render components in that route
   
  Redirect component redirects to a url or page when the user enters a url that is not in the routes.
  */
  //switch route: when one route is true the rest of the routes will not be evaluated
  //Triggered when user logged in, they are able to see all pages except log in
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
        </Route>

        <Redirect to="/" />
      </Switch>
    );
    //when user not logged in they are only able to see few pages
    // <Route path="/:userId/places" exact> the : means it is dynamic and you don't know the exact value yet.
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
