import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';

import A from "./a"

export let tools = (<>
  <A href="/write" color="inherit" icon edge="publish" aria-label="publish">
    <CreateRoundedIcon />
  </A>
</>);
export let write = (<>
  <IconButton color="inherit" edge="publish" aria-label="publish">
    <PublishRoundedIcon />
  </IconButton>
</>);

export default tools