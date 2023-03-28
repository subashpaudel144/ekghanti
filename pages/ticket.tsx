import { Button } from "@mantine/core"
import React from "react"
import FilterComponent from "../src/components/FilterComponent"
import Layout from "../src/components/Layout"

const Ticket = () => {
  return (
    <Layout>
      <section className="ticket_filter_section">
        <div className="d-flex justify-content-end add_ticket_button">
          <Button> Add New Ticket</Button>
        </div>

        <FilterComponent ticketPage />
      </section>
    </Layout>
  )
}

export default Ticket
