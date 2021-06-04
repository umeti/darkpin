import App from "comp/app";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import { useEffect, useState } from "react";

import g from "lib/g"
import child_process from "child_process"

export async function getStaticProps(ctx){
  let commit  = child_process.execSync(
    "git --no-pager log --pretty=oneline",
    {encoding:'utf-8'}).split('\n')[0]
  commit = `${commit.substr(41)} (${commit.substr(0,5)})`
  return {
    props:{
      info:{
        NODE_VERSION: process.version,
        NODE_ENV: process.env.NODE_ENV,
        'build time': new Date().toISOString(),
        commit,
      }
    }
  }
}

export default function DebugInfo(props) {
  let [info, setInfo] = useState(props.info)
  useEffect(() => {
    setInfo({
      ...info,
      url: document.location,
      userAgent: window.navigator.userAgent,


      key: g.state.key,
      api_key: g.state.api_key
    })
    console.log("挂载完成")

  },[])
  return (<App title="Debug info">
    <Table>
      <TableBody>
      {Object.keys(info).map((k, i) => (
        <TableRow key={i}>
          <TableCell>
            {k}
          </TableCell>
          <TableCell>
            {info[k] + ""}
          </TableCell>
        </TableRow>
      ))}
      </TableBody>
    </Table>
  </App>)
}


