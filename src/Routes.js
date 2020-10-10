import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ForgotPassword from "./app/components/ForgotPassword/views/ForgotPassword";
import PasswordResetSuccess from "./app/components/ForgotPassword/views/PasswordResetSuccess";
import ResetPassword from "./app/components/ForgotPassword/views/ResetPassword";
import VerificationCodeSent from "./app/components/ForgotPassword/views/VerificationCodeSent";
import LandingPage from "./app/components/LandingPage/views/LandingPage";
import SignUp from "./app/components/SignUp/views/SingUp";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signIn" component={LandingPage} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
        <Route exact path="/verificationCodeSent" component={VerificationCodeSent} />
        <Route exact path="/resetPassword" component={ResetPassword} />
        <Route exact path="/passwordResetSuccess" component={PasswordResetSuccess} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
