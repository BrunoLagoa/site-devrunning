import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./Home";
import Runs from "./Runs";
import MyAccount from "./MyAccount";
import ChangePass from "./ChangePass";
import CreateRun from "./CreateRun";
import Header from "./elements/Header";

const Restrito = props => {
  if (props.auth.isSigningin) {
    return <div className="ui active centered inline loader" />;
  }
  if (!props.auth.isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Header />
      <Route exact path={`${props.match.path}/`} component={Home} />
      <Route exact path={`${props.match.path}/runs`} component={Runs} />
      <Route
        exact
        path={`${props.match.path}/my-account`}
        component={MyAccount}
      />
      <Route
        exact
        path={`${props.match.path}/change-pass`}
        component={ChangePass}
      />
      <Route
        exact
        path={`${props.match.path}/create-run`}
        component={CreateRun}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Restrito);
