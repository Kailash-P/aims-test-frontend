import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="right">
      {"Copyright © "}
      <Link color="inherit" href="#">
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
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Copyright />
        </Container>
      </footer>
    </React.Fragment>
  );
}
