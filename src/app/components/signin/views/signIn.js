import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  Appcss: {
    backgroundColor: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(6px)",
    borderRadius: "15px",
    padding: "30px",
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [userid,setuserid]=useState('')
  const [password,setpassword]=useState('')
  const [state,setState]=React.useState({
    openID:false,
    openPass:false
  })

  const {openPass, openID } = state;

  // useEffect(()=>{
  //   emptyCheck(userid,password)
  // },[])

  const onSearchChangeID=(event)=>{
    setuserid(event.target.value)
    // console.log(password)
  }

  const onSearchChangePass=(event)=>{
    setpassword(event.target.value)
    // console.log(password)
  }

  const emptyCheck = ()=>{
    console.log(userid)
    console.log(password)
    if(userid.length === 0 ){
      setState({ openID: true});
      alert(openID)
    }
    console.log(password)
    if(password.length  ===0){
      setState({ openPass: true});
      alert(openPass)
    }
  }



  return (
    <Container component="main" maxWidth="xs" className={classes.Appcss}  >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={emptyCheck}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="User ID"
            name="email"
            autoComplete="email"
            onChange={onSearchChangeID}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={onSearchChangePass}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgotPassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}