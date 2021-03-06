import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LockIcon from "@material-ui/icons/Lock";
import LandingPageHeader from "../../LandingPage/views/LandingPageHeader";
import LandingPageFooter from "../../LandingPage/views/LandingPageFooter";


const useStyles = makeStyles((theme) => ({
  Appcss: {
    backgroundColor: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(6px)",
    borderRadius: "15px",
    padding: "30px",
    marginTop: "10%",
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  subtitle1: {
    fontSize: 13,
  },
}));

export default function ResetPassword() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <LandingPageHeader />
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Container component="main" maxWidth="xs" className={classes.Appcss}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Enter New Password
            </Typography>
            <form className={classes.form} noValidate>
              <Typography className={classes.subtitle1} align="center">
                Please enter new password for your account
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="userid"
                label="User Id"
                type="userid"
                id="userid"
                autoComplete="Enter User Id"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="newPassword"
                label="New Password"
                type="password"
                id="newPassword"
                autoComplete="Enter New password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="Enter New password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                href="/passwordResetSuccess"
              >
                Submit
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="disabled"
                href="/"
              >
                Cancel
              </Button>
            </form>
          </div>
        </Container>
      </Container>
      <LandingPageFooter />
    </React.Fragment>
  );
}
