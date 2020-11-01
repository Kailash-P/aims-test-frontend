import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { ListItemIcon, Paper } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FaceIcon from "@material-ui/icons/Face";
import { Link } from "react-router-dom";

const drawerWidth = 275;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(6px)",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    color: "primary",
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
    color: "rgba(0, 0, 0, 0.7);",
  },
  drawerPaper: {
    // backgroundColor: "rgba(255,255,255,0.7)",
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "auto",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  AccountPopUp: {
    backgroundColor: "rgba(255,255,255,0.8)",
    backdropFilter: "blur(6px)",
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

export default function Profile() {
  const classes = useStyles();

  const [openAccountPopUp, setopenAccountPopUp] = React.useState(false);
  const accountAnchorRef = React.useRef(null);

  const handleAccountPopUpToggle = () => {
    setopenAccountPopUp((prevAccountOpen) => !prevAccountOpen);
  };

  const handleAccountPopUpClose = (event) => {
    if (
      accountAnchorRef.current &&
      accountAnchorRef.current.contains(event.target)
    ) {
      return;
    }

    setopenAccountPopUp(false);
  };

  function handleAccountPopUpListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setopenAccountPopUp(false);
    }
  }

  const prevAccountOpen = React.useRef(openAccountPopUp);
  React.useEffect(() => {
    // if (accountAnchorRef.current.focus && prevAccountOpen.current === true && openAccountPopUp === false) {
    //   accountAnchorRef.current.focus();
    // }
    prevAccountOpen.current = openAccountPopUp;
  }, [openAccountPopUp]);
  return (
    <React.Fragment>
      <IconButton
        onClick={handleAccountPopUpToggle}
        ref={accountAnchorRef}
        aria-controls={openAccountPopUp ? "menu-list-grow" : undefined}
        aria-haspopup="true"
      >
        <StyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" />
        </StyledBadge>
        <Popper
          open={openAccountPopUp}
          anchorEl={accountAnchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper className={classes.AccountPopUp}>
                <ClickAwayListener onClickAway={handleAccountPopUpClose}>
                  <MenuList
                    autoFocusItem={openAccountPopUp}
                    id="menu-list-grow"
                    onKeyDown={handleAccountPopUpListKeyDown}
                  >
                    <MenuItem onClick={handleAccountPopUpClose}>
                      <ListItemIcon>
                        <FaceIcon fontSize="small" />
                        <span>My Account</span>
                      </ListItemIcon>
                    </MenuItem>
                    <MenuItem
                      onClick={handleAccountPopUpClose}
                      component={Link}
                      to="/"
                    >
                      <ListItemIcon>
                        <ExitToAppIcon fontSize="small" />
                        <span>Sign out</span>
                      </ListItemIcon>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </IconButton>
    </React.Fragment>
  );
}
