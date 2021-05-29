import App from "comp/app";
import A from "comp/a";
import IconButton from "@material-ui/core/IconButton"
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';

let tools = (<>
  <IconButton color="inherit" edge="publish" aria-label="publish">
    <PublishRoundedIcon />
  </IconButton>
</>);

export default function Write(props){
  return (<App title="Write" tools={tools} back>
    
  </App>)
}