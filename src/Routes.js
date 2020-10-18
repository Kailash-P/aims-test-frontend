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
import LandingPageHeader from "./app/components/LandingPage/views/LandingPageHeader";
import LandingPageFooter from "./app/components/LandingPage/views/LandingPageFooter";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import PurchaseSubscription from "./app/components/Subscription/views/PurchaseSubscription";
import Grid from '@material-ui/core/Grid';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#003E9B",
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: 'rgb(255, 255, 255)',
          // background: 'linear-gradient(116.83deg, #FFFFFF 19.84%, #999999 95.21%)',
          backgroundImage: "url(./vector.png)",
           backgroundSize:"100%",
          backgroundRepeat:"no-repeat",
          // backgroundPosition: 'center center',
          // backgroundSize: 'contain',
          backgroundAttachment: 'fixed',
        
        },
        palette: {
          // primary: 'linear-gradient(137deg, rgba(255,97,214,1) 0%, rgba(252,245,0,1) 100%)'
        },
      },
    },
  },
})

function Routes() {
  return (    
    <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <LandingPageHeader />
        <Switch>
        <React.Fragment>
        <Grid container spacing={3}>
          <Grid item  xs={1}></Grid>
          <Grid item xs={10} ma={0} > 
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
          <Grid item  xs={1}></Grid>
          </Grid> 
        </React.Fragment>                 
        </Switch>
        <LandingPageFooter />
      </MuiThemeProvider >  
    </BrowserRouter>
  );
}

export default Routes;
