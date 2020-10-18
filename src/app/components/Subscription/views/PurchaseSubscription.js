import React, { useState} from "react";
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
import LandingPageFooter from "../../LandingPage/views/LandingPageFooter";
import LandingPageHeader from "../../LandingPage/views/LandingPageHeader";

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
    paddingLeft:theme.spacing(2),
    paddingTop:theme.spacing(2)
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    paddingTop:theme.spacing(1)
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

const storeObj =
  {
    id: 1,
    storeName: '',
    storeAlias: '',
    storeTaxNumber: '',
    storeLandline:'',
    street1:'', 
    street2:'', 
    country:'', 
    state:'', 
    city:'', 
    zip:''
  }
  
export default function Subscription() {
  const classes = useStyles();
  const [storeList, setStoreList] = useState([storeObj]);
  const [numberOfStore, setNumberOfStore] = useState(2);
  var maxRowID;

  function handleChange(event, index) {
        let newArr = [...storeList];
        let item = newArr[index];
        item = {...item, [event.target.name]: event.target.value};
        newArr[index] = item;
        setStoreList(newArr);
  }

const AddStore = ()=>{
    maxRowID = 0;
    storeList.map(function(obj){     
    if (obj.id > maxRowID) {maxRowID = obj.id};    
    return maxRowID;
    });
     storeObj.id = (maxRowID+1);
     setStoreList(storeList.concat([storeObj]));    
  }

  const RemoveStore = (e,index)=>{
    if(storeList && storeList.length > 1){
    const list = [...storeList];
    list.splice(index, 1);
    setStoreList(list);
    }
  }

  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg">
        <LandingPageHeader />
        <CssBaseline />
        <Box display="flex" flexDirection="row-reverse">
        {storeList && storeList.length < numberOfStore &&(
          <Box p={1}>
            <Button
             onClick={AddStore}
              variant="contained"
              color="primary"
              size="medium"
              className={classes.button}
              startIcon={<AddIcon />}
            >
              Add Store &nbsp;&nbsp;
            </Button>

          </Box>
           )}
          <Box p={1}>
            
            <Typography component="h1" variant="h5">
              No. of Stores to Add : {(numberOfStore - (storeList.length))}
            </Typography>
          </Box>
        </Box>
        {storeList.map((store,i) => (
           <div key={i}>
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
                  {store.storeName &&(" - " +
                    store.storeName
                  )}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <div className={classes.column}>
                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        id={"storeName_" + store.id}
                        name="storeName"
                        value={store.storeName}
                        autoComplete="sname"
                        variant="outlined"
                        required
                        fullWidth
                        label="Store Name"
                        autoFocus
                        onChange={(event) => {
                          handleChange(event, i)
                      }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        id={"street1_" + store.id}
                        name="street1"
                        autoComplete="street1"
                        value={store.street1}
                        variant="outlined"
                        required
                        fullWidth
                        label="Street1"
                        onChange={(event) => {
                          handleChange(event, i)
                      }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        id={"country" + store.id}
                        name="country"
                        autoComplete="country"
                        value={store.country}
                        variant="outlined"
                        required
                        fullWidth
                        label="Country"
                        onChange={(event) => {
                          handleChange(event, i)
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        id={"city" + store.id}
                        name="city"
                        autoComplete="city"
                        value={store.city}
                        variant="outlined"
                        required
                        fullWidth
                        label="City"
                        onChange={(event) => {
                          handleChange(event, i)
                        }}
                      />
                    </Grid>  
                    <Grid item xs={12}>
                      <TextField
                        id={"storeLandline" + store.id}
                        name="storeLandline"
                        autoComplete="storeLandline"
                        value={store.storeLandline}
                        variant="outlined"
                        required
                        fullWidth
                        label="Store Landline"
                        onChange={(event) => {
                          handleChange(event, i)
                        }}
                      />
                    </Grid>            
                  </Grid>
                </form>
              </div>
              <div className={clsx(classes.column, classes.helper)}>
                <form  className={classes.form}>
                  <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <TextField
                        id={"storeAlias" + store.id}
                        name="storeAlias"
                        autoComplete="storeAlias"
                        value={store.storeAlias}
                        variant="outlined"
                        required
                        fullWidth
                        label="Store Alias"
                        onChange={(event) => {
                          handleChange(event, i)
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id={"street2" + store.id}
                        name="street2"
                        autoComplete="storeAlias"
                        value={store.street2}
                        variant="outlined"
                        fullWidth
                        label="Street2"
                        onChange={(event) => {
                          handleChange(event, i)
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        id={"state" + store.id}
                        name="state"
                        autoComplete="state"
                        value={store.state}
                        variant="outlined"
                        required
                        fullWidth
                        label="State"
                        onChange={(event) => {
                          handleChange(event, i)
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        id={"zip" + store.id}
                        name="zip"
                        autoComplete="zip"
                        value={store.zip}
                        variant="outlined"
                        required
                        fullWidth
                        label="Zip"
                        onChange={(event) => {
                          handleChange(event, i)
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                      id={"storeTaxNumber" + store.id}
                      name="storeTaxNumber"
                      autoComplete="storeTaxNumber"
                      value={store.storeTaxNumber}
                      variant="outlined"
                      required
                      fullWidth
                      label="Store TaxNumber"
                      onChange={(event) => {
                        handleChange(event, i)
                      }}
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
              {storeList && storeList.length > 1 &&(
              <Fab
                id= {store.id}
                onClick={(e) => {RemoveStore(e,i)}}
                size="small"
                color="secondary"
                aria-label="delete"
                className={classes.margin}
              >
                <DeleteIcon />
              </Fab>
              )}
            </AccordionActions>
          </Accordion>
          </div>
          </div>
        ))}
          <Box display="flex" flexDirection="row-reverse">
          <Box p={1}>
            <Button
             type="submit"
             size="medium"
             variant="contained"
             color="primary"
             className={classes.submit}
             href="/paymentCheckout"
            > Proceed to Pay</Button>
            </Box>
          </Box>
         
       
        <LandingPageFooter />
      </Container>
    </React.Fragment>
  );
}

