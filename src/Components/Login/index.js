import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

//import { Container } from "./styles";

function Login() {
  let { path } = useRouteMatch();

  return (
    <>
      <h1>Login</h1>
      <Switch>
        <Route exact path={path}>
          <LoginForm />
        </Route>

        <Route path={`${path}/criar`}>
          <LoginCreate />
        </Route>

        <Route path="/perder" component={LoginPasswordLost} />
        <Route path="/resetar" component={LoginPasswordReset} />
      </Switch>
    </>
  );
}

export default Login;
