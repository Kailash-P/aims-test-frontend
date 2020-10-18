import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor:"rgba(246,246,246,0.5)",
    top: '0',
    width: '100%',
    display: 'block',
    transition: 'top 0.3s',
    margin:'0',
    padding:'0'
    
  },
  toolbar: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    
  },
}));

export default function LandingPageHeader() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar} m={2}>
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="left"
            noWrap
            className={classes.toolbarTitle}
          >
            AIMS
          </Typography>
          <Button variant="text" size="small">
            About
          </Button>
          <Button href="/pricing" size="small">Pricing</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
