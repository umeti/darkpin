import App from 'comp/app'
import A from 'comp/a'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <App title="Home">
      hello world
      <A href="about"></A>
    </App>
  )
}
