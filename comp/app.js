
import Container from "@material-ui/core/Container"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blueGrey, brown } from '@material-ui/core/colors';

import A from "./a"
import Head from "next/head"
import { useRouter } from 'next/router'

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: brown,
  }
});

export default function App(props) {
  return (<ThemeProvider theme={theme}>
    <Head>
      <title>
        {props.title ? props.title + " - " : ""}
        {"hello world"}
      </title>
    </Head>
    <AppBar position="static">
      <Toolbar variant="dense">
        {props.back ? (<Back />) : (<Menu />)}
        <Typography variant="h6" className="inflate">
          {props.title || ""}
        </Typography>
        {props.tools || (
          <A href="/write" color="inherit" icon edge="publish" aria-label="publish">
            <CreateRoundedIcon />
          </A>)
        }
      </Toolbar>
    </AppBar>
    <Container maxWidth="sm">
      {props.children}
    </Container>
  </ThemeProvider>)
}

function Menu(props) {
  return (<>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
  </>)
}

function Back() {
  let router = useRouter()
  return (<>
    <IconButton edge="start" color="inherit" aria-label="menu"
      onClick={()=>router.back()}
    >
      <NavigateBeforeRoundedIcon />
    </IconButton>
  </>)
}