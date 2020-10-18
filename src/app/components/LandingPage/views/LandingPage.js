import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SignIn from "../../signin/views/signIn";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(6),
    // marginLeft: theme.spacing(3),
  },
}));



const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={1} justify="center" alignItems="center" className={classes.mainGrid}>
          <Grid item xs={12} md={8} >
            <h1 style={{margin:'0',fontSize:'200px',fontWeight:'500'}}>AIMS</h1>
            <h4 style={{margin:'0',fontSize:'25px',fontWeight:'300'}}>Analytical Intelligent Management System</h4>
            {/* <h4 style={{margin:'0',fontSize:'48px',fontWeight:'100'}}></h4> */}
          </Grid>
          <Grid item xs={12} md={4}>
            <SignIn></SignIn>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LandingPage;
