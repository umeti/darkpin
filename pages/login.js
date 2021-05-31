import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Box from "@material-ui/core/Box"


import App from "comp/app";
import A from "comp/a";
import { useState, useEffect } from "react"
import g from "lib/g"
import { useRouter } from "next/router";
import crypt from "../lib/crypt";

export default function Login(props) {
  let router = useRouter()
  let [password, setPassword] = useState("")
  let [isStorage, setStorage] = useState(false)
  return (<App title="Login" tools={<></>}>
    <Box my={20} display="flex" justifyContent="center" alignItems="flex-end">
      <TextField label="密码"
        value={password}
        onChange={(e) => { setPassword(e.target.value) }}
      />
      <Box mx={1}>
        <Button variant="contained" color="primary"
          onClick={(e) => {
            let referer = new URL(document.location)
              .hash.substr(1)
            login(password, isStorage)
            router.replace(referer)
          }}
        >进入</Button>
      </Box>
    </Box>
  </App>)
}

export function login(password, isStorage) {
  g.setState('key', crypt.kdf(password))
  // TODO: 保存密码
}

export function logout(){
  g.setState('key', '')
}