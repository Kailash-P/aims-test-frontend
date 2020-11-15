import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LandingPageHeader from "../../LandingPage/views/LandingPageHeader";
import LandingPageFooter from "../../LandingPage/views/LandingPageFooter";
import SelectableSearch from "../../Base/views/SelectableSearch";


const useStyles = makeStyles((theme) => ({
  Appcss: {
    backgroundColor: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(6px)",
    borderRadius: "15px",
    padding: "30px",
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [countryID, setCountryID] = React.useState(0);

  const [stateID, setStateID] = React.useState(0);

  // eslint-disable-next-line
  const [cityID, setCityID] = React.useState(0);


  const handleCountryChange = (event,value) => {
    setCountryID(value ? value.country_id:"");
   };

   const handleStateChange = (event,value) => {
    setStateID( value ? value.state_id:"");
   };

   const handleCityChange = (event,value) => {
    setCityID(value ? value.city_id:"");
   };

   
  return (
    <React.Fragment>
      <LandingPageHeader />
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Container maxWidth="xs" className={classes.Appcss} >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="middleName"
                    label="Middle Name"
                    name="middleName"
                    autoComplete="mname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="street1"
                    label="Street 1"
                    type="street1"
                    id="street1"
                    autoComplete="street1"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="street2"
                    label="Street 2"
                    type="street2"
                    id="street2"
                    autoComplete="street2"
                  />
                </Grid>
                <Grid item xs={12}>
                <SelectableSearch 
                required
                name="country"
                label="Country"
                selectValue="country_name"
                selectId="country_id"
                id="country"
                url="/common/GetCountries"
                onChangeEvent={handleCountryChange}
                >
                </SelectableSearch>
                </Grid>
                <Grid item xs={12}>
                <SelectableSearch
                required
                name="state"
                label="State"
                selectValue="state_name"
                selectId="state_id"
                id="state"
                url="/common/GetStates"
                onChangeEvent={handleStateChange}
                params= {{'country_id':countryID}}
                ></SelectableSearch>
                </Grid>
                <Grid item xs={12}>
                <SelectableSearch
                required
                name="city"
                label="City"
                selectValue="city_name"
                selectId="city_id"
                id="city"
                url="/common/GetCities"
                onChangeEvent={handleCityChange}
                params= {{'state_id':stateID}}
                ></SelectableSearch>
                </Grid>           
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="zipcode"
                    label="Zip Code"
                    type="zipcode"
                    id="zipcode"
                    autoComplete="zipcode"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                href = '/purchaseSubscription'
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </Container>
      <LandingPageFooter />
    </React.Fragment>
  );
}
