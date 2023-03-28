import { Button } from "@mantine/core"
import Head from "next/head"
import React from "react"
import FilterComponent from "../src/components/FilterComponent"
import Layout from "../src/components/Layout"
import TableComponent from "../src/components/TableComponent"
import styles from "../styles/Home.module.css"

const Ticket = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tickets | Ekghanti Services</title>
        <meta name="description" content="developed by Subash Paudel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="ticket_filter_section">
          <div className="d-flex justify-content-end me-5 add_ticket_button">
            <Button> Add New Ticket</Button>
          </div>

          <FilterComponent ticketPage />
        </section>
        <section className="mt-5 ticket_table">
          <TableComponent />
        </section>
      </Layout>
    </div>
  )
}

export default Ticket
