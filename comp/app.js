
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
// import  from "@material-ui/core/"
// import  from "@material-ui/core/"




import Icon from "@material-ui/core/Icon"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blueGrey, brown } from '@material-ui/core/colors';

import A from "./a"
import NextLink from "next/link";
import Head from "next/head"
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import g from "lib/g"
import { logout } from "pages/login"

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
          <A href="/write" color="inherit" icon >
            <CreateRoundedIcon />
          </A>)
        }
      </Toolbar>
    </AppBar>
    <Container maxWidth="sm">
      {props.children}
    </Container>
    <Footer />
  </ThemeProvider>)
}

function Menu(props) {
  let [open, setOpen] = useState(false)
  return (<>
    <IconButton edge="start" color="inherit" aria-label="menu"
      onClick={() => { setOpen(true) }}
    >
      <MenuIcon />
    </IconButton>
    <SwipeableDrawer
      anchor="left"
      open={open}
      onOpen={() => { setOpen(true) }}
      onClose={() => { setOpen(false) }}
    >
      <Box minWidth="200px" maxWidth="75vw">
        {/* <Header /> */}
        <List>
          <MenuItem text="主页" href="/" />
          <MenuItem text="调试信息" href="/debug-info" />
          <MenuItem text="关于" href="/about" />

          <MenuItem text="退出登录"
            onClick={logout} />

        </List>
        {/* <Footer /> */}
      </Box>
    </SwipeableDrawer>

  </>)
}

function MenuItem({ text, href, icon, onClick }) {
  let Icon = icon
  function Link(props) {
    return props.href ?
      <NextLink {...props} /> :
      <>{props.children}</>
  }
  return (<>
    <Link href={href}>
      <ListItem button href={href} onClick={onClick}>
        <Box mr={-2}>
          <ListItemIcon>
            {icon && <Icon />}
          </ListItemIcon>
        </Box>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  </>)
}

function Back() {
  let router = useRouter()
  return (<>
    <IconButton edge="start" color="inherit" aria-label="back"
      onClick={() => router.back()}
    >
      <NavigateBeforeRoundedIcon />
    </IconButton>
  </>)
}

function Footer() {
  return (<>
    <Box py={5}>

    </Box>
  </>)
}