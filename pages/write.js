import App from "comp/app";
import A from "comp/a";
import {write} from "comp/tools"


export default function Write(props){
  return (<App title="Write" tools={write}>
    <A href="/">home</A>
  </App>)
}