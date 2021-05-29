import App from 'comp/app'
import A from 'comp/a'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Paper from "@material-ui/core/Paper"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Divider  from '@material-ui/core/Divider'

import fs from "fs"
let cwd = process.cwd()
export async function getStaticProps(context) {
  let dir = fs.readdirSync(cwd + "/db")
  let data = []
  for (let f of dir) {
    try {
      let content = fs.readFileSync(cwd + "/db/" + f)
      data.push(JSON.parse(content))
    } catch (e) {
      console.log(e)
    }
  }
  // TODO: sort 
  return {
    props: {
      data
    }
  }
}

export default function Home(props) {
  return (
    <App title="Home">
      hello world
      <A href="about"></A>
      {props.data.map((v, i) => (
        <Paper key={i} elevation={0}  >
          <CardContent>
          <Typography >
            {v.content}
          </Typography>
          </CardContent>
          <Divider />
        </Paper>
      ))}
    </App>
  )
}
