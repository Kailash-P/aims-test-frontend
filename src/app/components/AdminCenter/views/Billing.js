import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import RefreshIcon from "@material-ui/icons/Refresh";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Base from "../../base/views/base";
import { AdminMenuListItems } from "./AdminMenuListItems";
import LandingPageFooter from "../../LandingPage/views/LandingPageFooter"
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Container from "@material-ui/core/Container";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  pricingheader: {
    marginTop: theme.spacing(2),
  },

  button: {
    // margin: theme.spacing(1),
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
  appBar: {
    backgroundColor: "rgba(255,255,255,0.5)",
    // backdropFilter: "blur(6px)",
  },
  title: {
    flexGrow: 1,
    color: "rgba(0, 0, 0, 0.7);",
  },
  plantable: {
    backgroundColor: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(6px)",
    marginBottom: "1%",
  },
  plantable2: {
    backgroundColor: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(6px)",
    marginBottom: "1%",
  },
  plantableheader: {
    alignItems: "center",
    display: "inline-flex",
    flexWrap: "Wrap",
    justifyContent: "left",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: "5px",
    backgroundColor:"rgba(255,255,255,0.5)",
    backdropFilter:"blur(8px)"    
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

function createData(name, id,total, license) {
  return { name, id,total, license };
}
const t1available = 0
const t1assigned = 8
const t1total = 8
const t1 = (t1assigned/t1total)*100 
const t2available = 5
const t2assigned = 3
const t2total = 8
const t2 = (t2assigned/t2available)*100

const rows = [
  createData("Inventory Management", [t1available, " available, ", t1assigned, " assigned of ",t1total," total"],t1, "Stores"),
  createData("Asset Management", [t2available," available, ",t2assigned," assigned of ",t2total," total"],t2, "Stores"),
];

function CircularProgressWithLabel(props) {
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="static" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  
  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and static variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

export default function Billing() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    
    <Base menuItems={AdminMenuListItems}>
      <h1>Billing</h1>
            <Container maxWidth="lg" className={classes.container}>
              <Button
                className={classes.button}
                startIcon={<GetAppOutlinedIcon />}
              >
                Export
              </Button>
              <Button className={classes.button} startIcon={<RefreshIcon />}>
                Refresh
              </Button>
              </Container>
      <TableContainer component={Paper} className={classes.plantable}>
        <Table size="small" aria-label="a dense table">
          <TableHead id="1">
            <TableRow>
              <TableCell justify="center" style={{ fontStyle: "bold" }}>
                Name
              </TableCell>
              <TableCell justify="center">Available Subscriptions</TableCell>
              <TableCell></TableCell>
              <TableCell justify="center">Account Type</TableCell>
              {/* <TableCell justify="center">Account Type</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" flexwrap="nowrap">
                  <Typography
                    className={classes.plantableheader}
                    component="div"
                  >
                    {" "}
                    {row.name}
                  </Typography>
                  <Button
                    startIcon={<MoreVertIcon />}
                    style={{ float: "right" }}
                    onClick={handleClick}
                  ></Button>
                  <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <StyledMenuItem>
                      <ListItemIcon>
                        <DeleteOutlineIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Deactivate Subscription" />
                    </StyledMenuItem>
                    <StyledMenuItem>
                      <ListItemIcon>
                        <ReceiptOutlinedIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Manage Subscription" />
                    </StyledMenuItem>
                  </StyledMenu>
                </TableCell>
                <TableCell justify="center">
                  <Typography
                    className={classes.plantableheader}
                    component="div"
                  >
                    {" "}
                    {row.id}
                  </Typography>
                </TableCell>
                <TableCell><CircularProgressWithLabel value={row.total} /></TableCell>
                <TableCell justify="center">
                  <Typography
                    className={classes.plantableheader}
                    component="div"
                  >
                    {" "}
                    {row.license}
                  </Typography>
                </TableCell>
                <TableCell justify="center">
                  <Typography
                    className={classes.plantableheader}
                    component="div"
                  >
                    {" "}
                    {row.status}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <LandingPageFooter />
    </Base>
    

  );
}
