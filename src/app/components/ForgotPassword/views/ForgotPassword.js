import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(25),
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
    }
}));

export default function ForgotPassword() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <EmailIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          We need to verify your identity
        </Typography>
        <form className={classes.form} noValidate>
          <Typography className={classes.subtitle1} align='center'>
            Please enter your email id to receive password reset link
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            href="/verificationCodeSent"
          >
            Send Verification Link
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
  );
}