
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"


import Icon from "@material-ui/core/Icon"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blueGrey, brown } from '@material-ui/core/colors';

import g from "lib/g"
import A from "./a"
import Head from "next/head"
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"

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
      {props.needLogin && !g.state.key
        ? <Login />
        : props.children
      }
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
      onClick={() => router.back()}
    >
      <NavigateBeforeRoundedIcon />
    </IconButton>
  </>)
}

function Login(props) {
  let [password, setPassword] = useState("")
  let [isStorage, setStorage] = useState(false)
  return (<>
    <Box my={20} display="flex" justifyContent="center" alignItems="flex-end">
      <TextField label="密码"
        value={password}
        onChange={(e) => { setPassword(e.target.value) }}
      />
      <Box mx={1}>
        <Button variant="contained" color="primary"
          onClick={(e) => { login(password, isStorage) }}
        >进入</Button>
      </Box>
    </Box>
  </>)
}

function login(password, isStorage) {
  g.setState('key', password)
  // TODO: 保存密码
}
