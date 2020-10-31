import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SignIn from "../../signin/views/signIn";
import LandingPageHeader from "./LandingPageHeader";
import LandingPageFooter from "./LandingPageFooter";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(6),
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
    <LandingPageHeader />
      <Container maxWidth="lg">
        <Grid
          container
          spacing={1}
          justify="center"
          alignItems="center"
          className={classes.mainGrid}
        >
          
          <Grid item xs={12} md={8}>
            <h1 style={{ margin: "0", fontSize: "175px", fontWeight: "300" }}>
              AIMS              
            </h1>
            <h4 style={{ margin: "0", fontSize: "25px", fontWeight: "300" }}>
                Analytical Intuitive Management System
              </h4>
          </Grid>
          <Grid item xs={12} md={4}>
            <SignIn></SignIn>
          </Grid>
        </Grid>
        
      </Container>
      <LandingPageFooter />
    </>
  );
};

export default LandingPage;
