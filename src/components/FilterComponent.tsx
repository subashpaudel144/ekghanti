import React from "react"
import { Button, Group, Input, Select } from "@mantine/core"
import { Row, Col } from "react-bootstrap"
import { DateInput } from "@mantine/dates"

interface FilterComponentProps {
  ticketPage?: boolean
}

const FilterComponent = ({ ticketPage }: FilterComponentProps) => {
  return (
    <Row>
      <Col md={4} className="mb-4">
        <Select
          label="Assigned By :"
          placeholder="----"
          searchable
          nothingFound="No options"
          maw={320}
          data={[
            { value: "ram", label: "Ram" },
            { value: "shyam", label: "Shyam" },
            { value: "hari", label: "Hari" },
            { value: "gita", label: "Gita" },
          ]}
        />
      </Col>

      <Col md={4} className="mb-4">
        <Select
          label="Group :"
          placeholder="----"
          searchable
          nothingFound="No options"
          maw={320}
          data={[
            { value: "group1", label: "Group 1" },
            { value: "group2", label: "Group 2" },
            { value: "group3", label: "Group 3" },
            { value: "group4", label: "Group 4" },
          ]}
        />
      </Col>

      <Col md={4} className="mb-3">
        <Select
          label="Assigned To :"
          placeholder="---"
          searchable
          nothingFound="No options"
          maw={320}
          data={[
            { value: "ram", label: "Ram" },
            { value: "shyam", label: "Shyam" },
            { value: "hari", label: "Hari" },
            { value: "gita", label: "Gita" },
          ]}
        />
      </Col>

      <Col md={4} className="mb-4">
        <Select
          label="Project :"
          placeholder="Select Project"
          searchable
          nothingFound="No options"
          maw={320}
          data={[
            { value: "drop call", label: "Drop Call" },
            { value: "kyc update", label: "KYC Update" },
            { value: "customer onboard", label: "Customer Unboard" },
            { value: "issue in wallet load", label: "Issue in wallet load" },
            { value: "other", label: "Other" },
          ]}
        />
      </Col>

      <Col md={4} className="mb-4">
        <Select
          label="Vertical :"
          placeholder="choose vertical"
          searchable
          nothingFound="No options"
          maw={320}
          data={[
            { value: "closed", label: "Closed" },
            { value: "raised and closed", label: "Raised and closed" },
            { value: "in progress", label: "In Progress" },
          ]}
        />
      </Col>

      <Col md={4} className="mb-4">
        <Select
          label="Sub-Vertical :"
          placeholder="choose sub vertical"
          searchable
          nothingFound="No options"
          maw={320}
          data={[
            { value: "closed", label: "closed" },
            { value: "cancelled", label: "cancelled" },
          ]}
        />
      </Col>

      <Col md={3}>
        <DateInput label="From :" placeholder="select date" maw={250} />
      </Col>
      <Col md={3}>
        <DateInput label="To :" placeholder="select date" maw={250} />
      </Col>
      <Col md={3}>
        <Select
          label="Ticket Status :"
          placeholder="-----"
          searchable
          nothingFound="No options"
          maw={250}
          data={[
            { value: "confirmed", label: "Confirmed" },
            { value: "pending", label: "Pending" },
            { value: "process", label: "Process" },
            { value: "cancelled", label: "Cancelled" },
          ]}
        />
      </Col>
      {ticketPage && (
        <Col md={2}>
          <Input.Wrapper label="Customer Number" maw={320} mx="auto">
            <Input<any>
              mask="+7 (000) 000-00-00"
              placeholder="Customer Number"
            />
          </Input.Wrapper>
        </Col>
      )}

      {!ticketPage && (
        <Col md={3}>
          <Button className="m-2">Search</Button>
          <Button color="grape" className="m-2">
            Clear
          </Button>
          <Button className="m-2">Export</Button>
          <Button className="m-2"> View Tickets</Button>
        </Col>
      )}

      {ticketPage && (
        <div className="d-flex justify-content-end pe-5 mt-3 ticket_filter_buttons">
          <Button className="m-2">Search</Button>
          <Button color="grape" className="m-2">
            Clear
          </Button>
          <Button className="m-2">Export Ticket</Button>
        </div>
      )}
    </Row>
  )
}

export default FilterComponent
