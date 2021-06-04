//TODO: 分页
import App from 'comp/app'
import A from 'comp/a'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Box from '@material-ui/core/Box'
import Paper from "@material-ui/core/Paper"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Divider from '@material-ui/core/Divider'
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"

import db from "lib/db"
import g from "lib/g"
import Redirect from "comp/redirect"
import { decrypt } from 'lib/crypt'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { requirePropFactory } from '@material-ui/core'

const NUM_PRE_PAGE = 10
const PAGE_SUM = Math.ceil(db.len / NUM_PRE_PAGE)

export async function getStaticPaths() {
  let paths = []
  for (let n = 1; n <= PAGE_SUM; n++) {
    paths.push({
      params: { n: n + "" }
    })
  }
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(context) {
  let n = parseInt(context.params.n)
  let data = db.query(NUM_PRE_PAGE,
    NUM_PRE_PAGE * (n - 1))

  let page = {
    now: n + "",
    prev: n - 1 <= 0 ? null : n - 1 + "",
    next: n + 1 > PAGE_SUM ? null : n + 1 + "",
    sum: PAGE_SUM
  }
  console.log(page)

  return {
    props: {
      data,
      page
    }
  }
}

export default function Contents(props) {
  if (!g.state.key) {
    return <Redirect dest={"/login#/" + props.page.now} />
  }

  return (
    <App title={`内容：第 ${props.page.now} 页`}>
      <Box my={2}>
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
      </Box>

      <Box display="flex">
        <A href={props.page.prev || props.page.now}>
          上一页
        </A>
        <Box flexGrow={1} textAlign="center">
          {props.page.now} / {props.page.sum}
        </Box>
        <A href={props.page.next || props.page.now}>
          下一页
        </A>
      </Box>
    </App>
  )
}
