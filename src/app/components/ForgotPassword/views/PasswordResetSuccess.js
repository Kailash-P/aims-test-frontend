import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LandingPageFooter from "../../LandingPage/views/LandingPageFooter";
import LandingPageHeader from "../../LandingPage/views/LandingPageHeader";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  subtitle1: {
    fontSize: 13,
  },
}));

export default function PasswordResetSuccess() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <LandingPageHeader />
      <Container component="main" maxWidth="lg">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <CheckCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Password Reset Successful
            </Typography>
            <form className={classes.form} noValidate>
              <Typography className={classes.subtitle1} align="center">
                Please sign in to your account with new credentials
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                href="/"
              >
                Ok
              </Button>
            </form>
          </div>
        </Container>
      </Container>
      <LandingPageFooter />
    </React.Fragment>
  );
}
