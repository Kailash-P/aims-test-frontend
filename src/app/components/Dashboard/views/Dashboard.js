import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { Button, CardActionArea } from "@material-ui/core";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import LandingPageFooter from "../../LandingPage/views/LandingPageFooter";
import UserProfile from "../../base/views/UserProfile";

const Dashboard = () => {
  const useStyles = makeStyles((theme) => ({
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "rgba(255,255,255,0.5)",
      backdropFilter: "blur(6px)",
    },
    cardContent: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: "rgba(255,255,255,0.5)",
      backdropFilter: "blur(6px)",
    },
    title: {
      flexGrow: 1,
      color: "rgba(0, 0, 0, 0.7);",
    },
  }));

  var items = [
    {
      id: 1,
      storeName: "Store 1",
      storeAddress:
        "Cloud Ville, 1st CloudVille Street, CloudVilleTownShip, CloudVilleCity, 99999, INDIA",
    },
    {
      id: 2,
      storeName: "Store 2",
      storeAddress:
        "Cloud Ville, 2nd CloudVille Street, CloudVilleTownShip, CloudVilleCity, 99999, INDIA",
    },
    {
      id: 3,
      storeName: "Store 3",
      storeAddress:
        "Cloud Ville, 3rd CloudVille Street, CloudVilleTownShip, CloudVilleCity, 99999, INDIA",
    },
    {
      id: 4,
      storeName: "Store 4",
      storeAddress:
        "Cloud Ville, 4th CloudVille Street, CloudVilleTownShip, CloudVilleCity, 99999, INDIA",
    },
  ];

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography
            component="h1"
            variant="h5"
            noWrap
            className={classes.title}
          >
            AIMS
          </Typography>
          <Button
            variant="outlined"
            size="medium"
            startIcon={<SupervisorAccountIcon />}
          >
            Admin Center
          </Button>
          <UserProfile />
        </Toolbar>
      </AppBar>
      <main>
        <CssBaseline />
        <div className={classes.heroContent}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Store Dashboard
          </Typography>
          <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container spacing={4}>
              {items.map((item) => (
                <Grid item key={item.id} xs={12} sm={12} md={3}>
                  <CardActionArea href="/home">
                    <Card className={classes.card}>
                      <Button variant="outlined">
                        <StorefrontIcon fontSize="large" /> {item.storeName}
                      </Button>
                      <CardContent className={classes.cardContent}>
                        <Typography>{item.storeAddress}</Typography>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
      <LandingPageFooter />
    </React.Fragment>
  );
};

export default Dashboard;
