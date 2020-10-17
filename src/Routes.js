import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ForgotPassword from "./app/components/ForgotPassword/views/ForgotPassword";
import PasswordResetSuccess from "./app/components/ForgotPassword/views/PasswordResetSuccess";
import ResetPassword from "./app/components/ForgotPassword/views/ResetPassword";
import VerificationCodeSent from "./app/components/ForgotPassword/views/VerificationCodeSent";
import LandingPage from "./app/components/LandingPage/views/LandingPage";
import pricing from "./app/components/pricing/views/pricing";
import PaymentCheckout from "./app/components/Payment/views/PaymentCheckout";
import SignUp from "./app/components/SignUp/views/SingUp";
import PurchaseSubscription from "./app/components/Subscription/views/PurchaseSubscription";
import Grid from '@material-ui/core/Grid';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      <Grid container spacing="3">
        <Grid item  xs="1"></Grid>
        <Grid item xs="10">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signIn" component={LandingPage} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/verificationCodeSent" component={VerificationCodeSent} />
          <Route exact path="/resetPassword" component={ResetPassword} />
          <Route exact path="/passwordResetSuccess" component={PasswordResetSuccess} />
          <Route exact path="/paymentCheckout" component={PaymentCheckout} />
          <Route exact path="/pricing" component={pricing} />
          <Route exact path="/purchaseSubscription" component={PurchaseSubscription} />
        </Grid>
        <Grid item  xs="1"></Grid>
      </Grid>                   
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
