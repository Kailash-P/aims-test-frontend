import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import { green } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import LandingPageHeader from "../../LandingPage/views/LandingPageHeader";
import LandingPageFooter from "../../LandingPage/views/LandingPageFooter";
import Divider from "@material-ui/core/Divider";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  pricingheader: {
    marginTop: theme.spacing(2),
  },
  card: {
    height: 400,
    width: "100%",
    maxWidth: 195,
    position: "relative",
    borderRadius: 16,
    display: "flex",
    backgroundColor: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(6px)",
    flexDirection: "column",
    paddingTop: 4,
    paddingBottom: 4,
    "&:last-child": {
      paddingRight: 5,
    },
    flexShrink: 0,
    marginRight: theme.spacing(5),
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  cardHeader: {
    fontSize: "small",
  },
  cardpaidlist: {
    paddingTop: 5,
    justifyContent: "center",
    paddingLeft: 10,
  },
  cardpaid: {
    paddingTop: 2,
    paddingLeft: 2,
    fontSize: "small",
    justifyContent: "center",
  },
  planswitcher: {
    paddingBottom: 12,
    paddingTop: 4,
  },
  showallplan: {
    paddingBottom: 12,
    paddingTop: 10,
    justifyContent: "center",
    display: "flex",
  },
  cardpaidlisticon: {
    position: "relative",
    top: 8,
  },
  gridlisticon: {
    position: "relative",
    left: 25,
  },
  plantable: {
    backgroundColor: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(6px)",
  },
  plantableheader: {
    alignItems: "center",
    display: "inline-flex",
    flexWrap: "Wrap",
    justifyContent: "left",
  },
  commingsoon: {
    border: "2px solid #0b8043",
    borderRadius: 4,
    fontSize: "small",
    lineHeight: 1.2,
    marginTop: 5,
    marginLeft: 10,
    padding: 5,
    textAlign: "center",
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: "primary",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

var tiers = [
  {
    id: 1,
    title: "Basic",
    price: 0,
    buttonText: "Get started",
  },
  {
    id: 2,
    title: "Starter",
    price: 10,
    buttonText: "Get started",
  },
  {
    id: 3,
    title: "Plus",
    price: 20,
    buttonText: "Get started",
  },
  {
    id: 4,
    title: "Premium",
    price: 30,
    buttonText: "Get started",
  },
];

function createData(name, starter, plus, premium) {
  return { name, starter, plus, premium };
}

const rows = [
  createData("Employee Management", true, true, true),
  createData("HR Management", true, true, true),
  createData("Inventory Management", true, true, true),
  createData("Asset Management", false, true, true),
  createData("Data Analytics", false, false, true),
];

export default function Pricing() {
  const classes = useStyles();
  const [stores, setstores] = useState(1);
  const [users, setusers] = useState(5);
  const [plan, setplan] = useState(0);
  const [showallplan, setShowAllPlan] = useState(false);
  const [showallplanbuttontext, showAllplanButtonText] = useState(
    "Show All Plans"
  );

  const [starterprice, setStarterPrice] = useState(10);
  const [plusprice, setPlusPrice] = useState(20);
  const [premiumprice, setPremiumPrice] = useState(30);

  useEffect(() => {
    planCostCalCulator(plan);
    // eslint-disable-next-line
  }, [users, plan]);

  const setStoresValue = (e, val) => {
    setstores(val);
    setusers(val * 5);
  };
  const setUsersValue = (e, val) => {
    if (val >= stores * 5) {
      setusers(val);
    } else {
      setusers(stores * 5);
    }
  };
  const setStoresinputValue = (e) => {
    var val = e.target.value ? parseInt(e.target.value) : 1;
    if (val < 1) {
      setstores(1);
      setusers(5);
    } else if (val > 100) {
      setstores(100);
      setusers(500);
    } else {
      setstores(val);
      setusers(val * 5);
    }
  };
  const setUsersinputValue = (e) => {
    var val = e.target.value ? parseInt(e.target.value) : 1;
    if (val < 5 && stores === 1) {
      setusers(5);
    } else if (val > 500) {
      setusers(500);
    } else {
      setusers(val);
      if (val >= stores * 5) {
        setusers(val);
      } else {
        setusers(stores * 5);
      }
    }
  };
  const handleChange = (event, newValue) => {
    setplan(newValue);
  };

  const ShowAllPlan = () => {
    setShowAllPlan(!showallplan);
    showAllplanButtonText(showallplan ? "Show All Plans" : "Hide All Plans");
  };

  function planCostCalCulator(selectedPlan) {
    var yearPlane = selectedPlan === 1 ? 2 : 1;
    var extraUsers = users - stores * 5;
    setStarterPrice((stores * 10 + extraUsers) * yearPlane);
    setPlusPrice((stores * 20 + extraUsers) * yearPlane);
    setPremiumPrice((stores * 30 + extraUsers) * yearPlane);
  }

  return (
    <React.Fragment>
      <LandingPageHeader />
    <Container component="main" maxWidth="lg">
      <Container maxWidth="sm" component="main">
        <Tabs
          centered
          className={classes.planswitcher}
          value={plan}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Yearly" {...a11yProps(0)} />
          <Tab label="2 Years" {...a11yProps(1)} />
        </Tabs>
      </Container>
      <Container maxWidth="lg" component="main">
        <Grid container justify="center" alignItems="flex-end">
          <Card className={classes.card}>
            <CardHeader
              title="Custom"
              titleTypographyProps={{ align: "center" }}
              subheaderTypographyProps={{
                align: "center",
              }}
              className={classes.cardHeader}
            />
            <CardContent>
              <Typography variant="h6" align="center">
                Stores
              </Typography>
              <PrettoSlider
                id="storesslider"
                value={stores}
                onChange={setStoresValue}
                min={1}
                max={100}
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={1}
              />
              <Typography variant="h6" align="center">
                Users
              </Typography>
              <PrettoSlider
                id="users"
                value={users}
                onChange={setUsersValue}
                valueLabelDisplay="auto"
                min={5}
                max={500}
                aria-label="pretto slider"
                defaultValue={5}
              />
              <TextField
                className={classes.textField}
                id="numbertextfield"
                label="Stores"
                value={stores}
                onChange={setStoresinputValue}
                type="number"
                InputLabelProps={{ shrink: true }}
                margin="normal"
              />
              <TextField
                className={classes.textField}
                id="userstextfield"
                label="Users"
                value={users}
                onChange={setUsersinputValue}
                type="number"
                InputLabelProps={{ shrink: true }}
                margin="normal"
              />
            </CardContent>
          </Card>
          {tiers.map((tier) => (
            <Card className={classes.card} key={tier.id}>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{
                  align: "center",
                }}
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.cardPricing}>
                  <Typography component="h4" variant="h4">
                    ${tier.id === 1 && "0"}
                    {tier.id === 2 && starterprice}
                    {tier.id === 3 && plusprice}
                    {tier.id === 4 && premiumprice}
                  </Typography>
                  {tier.id !== 1 && (
                    <Typography variant="h6">/months</Typography>
                  )}
                </div>
              </CardContent>
              <CardActions>
                <Button
                  href="/signUp"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
              <CardContent className={classes.cardpaidlist}>
                <Typography
                  className={classes.cardpaid}
                  fontSize="inherit"
                  variant="h6"
                >
                  <CheckSharpIcon
                    className={classes.cardpaidlisticon}
                    style={{ color: green[500] }}
                  />
                  Inventory Management
                </Typography>

                {(tier.id === 1 || tier.id === 3 || tier.id === 4) && (
                  <Typography
                    className={classes.cardpaid}
                    fontSize="inherit"
                    variant="h6"
                  >
                    <CheckSharpIcon
                      className={classes.cardpaidlisticon}
                      style={{ color: green[500] }}
                    />
                    Asset Management
                  </Typography>
                )}

                {(tier.id === 1 || tier.id === 4) && (
                  <Typography
                    className={classes.cardpaid}
                    fontSize="inherit"
                    variant="h6"
                  >
                    <CheckSharpIcon
                      className={classes.cardpaidlisticon}
                      style={{ color: green[500] }}
                    />
                    Data Analytics
                  </Typography>
                )}
              </CardContent>
              {tier.id === 1 && (
                <CardContent align="center">
                  <Divider />
                  <Typography className={classes.cardpaid}>
                  {" "}
                    3 months free trial
                  </Typography>
                </CardContent>
              )}
            </Card>
          ))}
        </Grid>
      </Container>
      <div className={classes.showallplan}>
        <Button onClick={ShowAllPlan} variant="contained" color="primary">
          {showallplanbuttontext}
          {showallplan === true && <ArrowUpwardIcon fontSize="inherit" />}
          {showallplan === false && <ArrowDownwardIcon fontSize="inherit" />}
        </Button>
      </div>

      {showallplan === true && (
        <TableContainer component={Paper} className={classes.plantable}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell justify="center">AIMS Starter</TableCell>
                <TableCell justify="center">AIMS Plus&nbsp;</TableCell>
                <TableCell justify="center">AIMS Premium&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" flexwrap="nowrap">
                    <Typography
                      className={classes.plantableheader}
                      component="th"
                    >
                      {" "}
                      {row.name}
                    </Typography>
                    {row.name === "Data Analytics" && (
                      <Typography
                        style={{ color: green[500] }}
                        component="span"
                        className={classes.commingsoon}
                      >
                        Coming Soon
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell justify="center">
                    {" "}
                    {row.starter === true ? (
                      <CheckSharpIcon
                        className={classes.gridlisticon}
                        style={{ color: green[500] }}
                      ></CheckSharpIcon>
                    ) : (
                      <CloseSharpIcon
                        className={classes.gridlisticon}
                        style={{ color: red[500] }}
                      ></CloseSharpIcon>
                    )}{" "}
                  </TableCell>
                  <TableCell justify="center">
                    {" "}
                    {row.plus === true ? (
                      <CheckSharpIcon
                        className={classes.gridlisticon}
                        style={{ color: green[500] }}
                      ></CheckSharpIcon>
                    ) : (
                      <CloseSharpIcon
                        className={classes.gridlisticon}
                        style={{ color: red[500] }}
                      ></CloseSharpIcon>
                    )}{" "}
                  </TableCell>
                  <TableCell justify="center">
                    {" "}
                    {row.premium === true ? (
                      <CheckSharpIcon
                        className={classes.gridlisticon}
                        style={{ color: green[500] }}
                      ></CheckSharpIcon>
                    ) : (
                      <CloseSharpIcon
                        className={classes.gridlisticon}
                        style={{ color: red[500] }}
                      ></CloseSharpIcon>
                    )}{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
    <LandingPageFooter />
    </React.Fragment>
  );
}
