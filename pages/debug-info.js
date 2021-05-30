import App from "comp/app";
import { Table, TableCell, TableRow } from "@material-ui/core";
import { useEffect, useState } from "react";

import g from "lib/g"

let buildInfo = {
  pwd: process.cwd()
}

export default function DebugInfo(props) {
  let [info, setInfo] = useState(buildInfo)
  useEffect(() => {
    setInfo(Object.assign(info,{
      url: document.location,
      userAgent: window.navigator.userAgent,
      key: g.state.key
    }))

  }, [])
  return (<App title="Debug info">
    <Table>
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
    </Table>
  </App>)
}


