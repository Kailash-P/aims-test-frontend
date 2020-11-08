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
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import RefreshIcon from "@material-ui/icons/Refresh";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TextField from "@material-ui/core/TextField";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Base from "../../base/views/base";
import { AdminMenuListItems } from "./AdminMenuListItems";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import LandingPageFooter from "../../LandingPage/views/LandingPageFooter"

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

function createData(name, id, license, status) {
  return { name, id, license, status };
}
const rows = [
  createData("test1", "test1@cloudville.io", "Asset Management", "Allowed"),
  createData("test2", "test2@cloudville.io", "Inventory Management", "Allowed"),
  createData(
    "test3",
    "test3@cloudville.io",
    "Asset and Inventory Management",
    "Allowed"
  ),
  createData("test4", "test4@cloudville.io", "Employee Management", "Allowed"),
  // createData("Data Analytics", false, false, true),
];

export default function ActiveUsers() {
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
      <h1>Active Users</h1>
      <TableContainer component={Paper} className={classes.plantable2}>
        {/* <Table aria-label="simple table"> */}
        <TableHead id="0">
          <TableRow>
            <TableCell>
              <Button
                className={classes.button}
                startIcon={<PersonAddOutlinedIcon />}
              >
                Add a User
              </Button>
            </TableCell>
            <TableCell>
              <Button className={classes.button} startIcon={<RefreshIcon />}>
                Refresh
              </Button>
            </TableCell>
            <TableCell>
              <Button
                className={classes.button}
                startIcon={<DeleteOutlineIcon />}
              >
                Delete
              </Button>
            </TableCell>
            <TableCell>
              <Button
                className={classes.button}
                startIcon={<VpnKeyOutlinedIcon />}
              >
                Reset Password
              </Button>
            </TableCell>
            <TableCell>
              <Button
                className={classes.button}
                startIcon={<ReceiptOutlinedIcon />}
              >
                Manage Subscription
              </Button>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField
                id="input-with-icon-textfield"
                label="Search User"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        {/* </Table> */}
      </TableContainer>
      <TableContainer component={Paper} className={classes.plantable}>
        <Table size="small" aria-label="a dense table">
          <TableHead id="1">
            <TableRow>
              <TableCell justify="center" style={{ fontStyle: "bold" }}>
                Display Name
              </TableCell>
              <TableCell justify="center">Username</TableCell>
              <TableCell justify="center">Licenses</TableCell>
              <TableCell justify="center">Sign-In Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" flexwrap="nowrap">
                  <Typography
                    className={classes.plantableheader}
                    component="th"
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
                      <ListItemText primary="Delete User" />
                    </StyledMenuItem>
                    <StyledMenuItem>
                      <ListItemIcon>
                        <ReceiptOutlinedIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Manage Subscription" />
                    </StyledMenuItem>
                    <StyledMenuItem>
                      <ListItemIcon>
                        <AlternateEmailIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Manage username and email" />
                    </StyledMenuItem>
                  </StyledMenu>
                </TableCell>
                <TableCell justify="center">
                  <Typography
                    className={classes.plantableheader}
                    component="th"
                  >
                    {" "}
                    {row.id}
                  </Typography>
                </TableCell>
                <TableCell justify="center">
                  <Typography
                    className={classes.plantableheader}
                    component="th"
                  >
                    {" "}
                    {row.license}
                  </Typography>
                </TableCell>
                <TableCell justify="center">
                  <Typography
                    className={classes.plantableheader}
                    component="th"
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
