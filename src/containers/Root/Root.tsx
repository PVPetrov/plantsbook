import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { Auth, Main } from "containers";
import { Layout } from "components";
import { getIsLoggedIn } from "rdx/auth";
import history from "utils/history";

interface Props {}

const Root: React.FC<Props> = () => {
  return (
    <Layout
      main={
        <Router history={history}>
          <Route
            path="/"
            render={() => (getIsLoggedIn ? <Main /> : <Redirect to="/login" />)}
          />
          <Route
            path="/"
            render={() => (getIsLoggedIn ? <Redirect to="/" /> : <Auth />)}
          />
        </Router>
      }
    />
  );
};

export default Root;
