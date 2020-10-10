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
    marginLeft: theme.spacing(0.1)
  },
  card: {
    display: "flex",
    backgroundImage: "url(/cover.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "35vw",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <LandingPageHeader />
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} md={8}>
           
          </Grid>
          <Grid item xs={12} md={4}>
              <SignIn></SignIn>
          </Grid>
        </Grid>
        <LandingPageFooter />
      </Container>
    </React.Fragment>
  );
};

export default LandingPage;
