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
import g from "lib/g"
import Redirect from "comp/redirect"

import { decrypt } from 'lib/crypt'
import { useEffect, useState } from 'react'
export async function getStaticProps(context) {
  let data = db.query(10)
  return {
    props: {
      data
    }
  }
}

export default function Home(props) {
  if(!g.state.key){
    return <Redirect dest={"/login#/"} />
  }

  return (
    <App title="Home" >
      hello world
      <A href="about"></A>
      {props.data.map((v, i) => (
        <Paper key={i} elevation={0}  >
          <CardContent>
          <Typography >
            {decrypt(v.content)}
          </Typography>
          </CardContent>
          <Divider />
        </Paper>
      ))}
    </App>
  )
}
