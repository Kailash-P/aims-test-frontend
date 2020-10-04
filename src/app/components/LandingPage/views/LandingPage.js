import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LandingPageHeader from "./LandingPageHeader";
import LandingPageFooter from "./LandingPageFooter";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import SignIn from "../../signin/views/SignIn";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(0.1),
  },
  card: {
    display: "flex",
    backgroundImage: "url(https://source.unsplash.com/random)",
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
            <CardActionArea component="a" href="#">
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5"></Typography>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                    ></Typography>
                    <Typography variant="subtitle1" paragraph></Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                    ></Typography>
                  </CardContent>
                </div>
              </Card>
            </CardActionArea>
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
