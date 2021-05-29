import App from "comp/app";
import A from "comp/a";
import IconButton from "@material-ui/core/IconButton"
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';

import TextField from "@material-ui/core/TextField"
import InputBase from '@material-ui/core/InputBase';
import { Divider, Paper } from "@material-ui/core";
import { useState } from "react";
import { useRouter } from "next/router";



export default function Write(props) {
  let router = useRouter()
  let [content, setContent] = useState("")
  let tools = (<>
    <IconButton color="inherit" 
    onClick={()=>{send({
      data:{
        create_time: new Date().getTime(),
        content
      },
      name: "_"+new Date().getTime()
    },()=>{
      router.replace("/")
    },(err)=>{
      alert(err)
    })}}
    disabled={content == ""}
    edge="publish" 
    aria-label="publish">
      <PublishRoundedIcon />
    </IconButton>
  </>);

  return (<App title="Write" tools={tools} back>

    <InputBase
      placeholder="hello world"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      multiline
      fullWidth
      autoFocus
      rows={10}
      rowsMax={1000}
    />

    <Divider />

  </App>)
}

function send(param, handleOk, handleError){
  param.data = JSON.stringify(param.data)
  fetch("/api/write.dev",{
    method: "PUT",
    body: JSON.stringify(param),
  })
  .then(res => res.json())
  .then(data => handleOk(data))
  .catch(err => handleError(err))
}