import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(3, 2),
    position:'sticky',
    marginTop:'calc(2% + 75px)',
    bottom: '0'
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="right">
      {"Copyright © "}
      <Link color="inherit" href="/">
        AIMS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function LandingPageFooter() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <CssBaseline />
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Copyright />
        </Container>
      </footer>
      </div>
    </React.Fragment>
  );
}
