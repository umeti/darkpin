import App from "comp/app";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import { useEffect, useState } from "react";

import g from "lib/g"

let buildInfo = {
  pwd: process.cwd(),
  NODE_ENV: process.env.NODE_ENV,
  
}

export default function DebugInfo(props) {
  let [info, setInfo] = useState(buildInfo)
  useEffect(() => {
    setInfo(Object.assign(info,{
      url: document.location,
      userAgent: window.navigator.userAgent,
      key: g.state.key
    }))
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


