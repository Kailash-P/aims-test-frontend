import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LandingPageHeader from "./LandingPageHeader";
import LandingPageFooter from "./LandingPageFooter";
import Grid from "@material-ui/core/Grid";
import SignIn from "../../signin/views/signIn";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(0.1),
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <LandingPageHeader />
      <Container maxWidth="lg">
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} md={8}></Grid>
          <Grid item xs={12} md={4}>
            <SignIn></SignIn>
          </Grid>
        </Grid>
      </Container>
      <LandingPageFooter />
    </React.Fragment>
  );
};

export default LandingPage;
