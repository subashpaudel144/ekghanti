import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Charts from "../src/components/Charts"
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
        <section className="home_filter_section">
          <FilterComponent />
        </section>

        <section className="mt-5 home_chart_section">
          <Charts />
        </section>
      </Layout>
    </div>
  )
}

export default Home
