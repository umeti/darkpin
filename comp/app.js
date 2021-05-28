import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blueGrey, brown } from '@material-ui/core/colors';

import A from "./a"
import tools from "comp/tools"

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: brown,
  }
});

export default function App(props) {
  return (<ThemeProvider theme={theme}>
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="inflate">
          {props.title || ""}
        </Typography>
        {props.tools || tools}
      </Toolbar>
    </AppBar>
    {props.children}

    
  </ThemeProvider>)
}