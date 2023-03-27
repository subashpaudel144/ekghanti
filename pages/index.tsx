import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import FilterComponent from "../src/components/FilterComponent"
import Layout from "../src/components/Layout"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ekghanti Services</title>
        <meta name="description" content="developed by Subash Paudel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <FilterComponent />
      </Layout>
    </div>
  )
}

export default Home
