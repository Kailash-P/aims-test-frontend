import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems } from "./MenuListItems";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { ListItemIcon, Paper } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FaceIcon from "@material-ui/icons/Face";
import { Link } from "react-router-dom";
// import Avatar from "@material-ui/core/Avatar";

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
    marginRight: 36,
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

export default function MenuLandingPage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [openAccountPopUp, setopenAccountPopUp] = React.useState(false);
  const accountAnchorRef = React.useRef(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

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
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              noWrap
              className={classes.title}
            >
              Home
            </Typography>
            <IconButton
              onClick={handleAccountPopUpToggle}
              ref={accountAnchorRef}
              aria-controls={openAccountPopUp ? "menu-list-grow" : undefined}
              aria-haspopup="true"
            >
              {/* <Avatar className={classes.avatar}> */}
                <AccountCircleIcon />
              {/* </Avatar> */}
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
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          {/* <Container maxWidth="lg" className={classes.container}></Container> */}
        </main>
      </Container>
    </React.Fragment>
  );
}
