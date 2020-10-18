import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "50%",
  },
  helper: {
    padding: theme.spacing(1, 5),
  },
  paper: {
    display: "flex",
    flexDirection: "column",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Subscription() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box display="flex" flexDirection="row-reverse">
          <Box p={1}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AddIcon />}
            >
              Add Store
            </Button>

          </Box>
          <Box p={1}>
           
            <Typography component="h1" variant="h5">
              No. of Stores to Add : 3
            </Typography>
          </Box>
        </Box>
        <div className={classes.paper}>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography component="h1" variant="h5">
                  Store
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <div className={classes.column}>
                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="sname"
                        name="storeName"
                        variant="outlined"
                        required
                        fullWidth
                        id="storeName"
                        label="Store Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="storeAlias"
                        label="Store Alias"
                        name="storeAlias"
                        autoComplete="salias"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        multiline
                        rows={4}
                        fullWidth
                        name="storeAddress"
                        label="Store Address"
                        type="textarea"
                        id="storeAddress"
                        autoComplete="sAddress"
                      />
                    </Grid>
                  </Grid>
                </form>
              </div>
              <div className={clsx(classes.column, classes.helper)}>
                <form className={classes.form}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="slandline"
                        name="storeLandline"
                        variant="outlined"
                        required
                        fullWidth
                        id="storeLandline"
                        label="Store Landline"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="storeTaxIdNumber"
                        label="Store TaxNumber"
                        name="storeTaxIdNumber"
                        autoComplete="sTaxIdNumber"
                      />
                    </Grid>
                    <Grid item xs={12}></Grid>
                  </Grid>
                </form>
              </div>
            </AccordionDetails>
            <Divider />
            <AccordionActions>
              <Fab
                size="small"
                color="primary"
                aria-label="add"
                className={classes.margin}
              >
                <SaveIcon />
              </Fab>
              <Fab
                size="small"
                color="secondary"
                aria-label="delete"
                className={classes.margin}
              >
                <DeleteIcon />
              </Fab>
            </AccordionActions>
          </Accordion>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            href="/paymentCheckout"
          >
            Proceed to Pay
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
}
