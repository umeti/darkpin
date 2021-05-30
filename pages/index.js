import App from 'comp/app'
import A from 'comp/a'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Paper from "@material-ui/core/Paper"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Divider  from '@material-ui/core/Divider'

import db from "lib/db"
export async function getStaticProps(context) {
  let data = db.query(10)
  return {
    props: {
      data
    }
  }
}

export default function Home(props) {
  return (
    <App title="Home" needLogin>
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
