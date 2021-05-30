import '../styles/globals.css'
import Head from "next/head"
import { useEffect, useState } from 'react'
import g from "lib/g"

function MyApp({ Component, pageProps }) {
  g.newState("key",useState(""))
  return (<>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
