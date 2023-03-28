import { Button } from "@mantine/core"
import React from "react"
import FilterComponent from "../src/components/FilterComponent"
import Layout from "../src/components/Layout"
import TableComponent from "../src/components/TableComponent"
import styles from "../styles/Home.module.css"

const Ticket = () => {
  return (
    <div className={styles.container}>
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
