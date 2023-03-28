import Head from "next/head"
import React from "react"
import Layout from "../src/components/Layout"

const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | Ekghanti Services</title>
        <meta name="description" content="developed by Subash Paudel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="not_found_wrapper">
          This page is not completed to display
        </div>
      </Layout>
    </>
  )
}

export default PageNotFound
