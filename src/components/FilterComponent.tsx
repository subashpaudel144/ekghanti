import React from "react"
import { Button, Group, Select } from "@mantine/core"
import { useId } from "@mantine/hooks"
import { Row, Col } from "react-bootstrap"
import { DateInput } from "@mantine/dates"
import { ButtonGroup } from "@mantine/core/lib/Button/ButtonGroup/ButtonGroup"

const FilterComponent = () => {
  const id = useId()
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
            { value: "ram", label: "Ram" },
            { value: "shyam", label: "Shyam" },
            { value: "hari", label: "Hari" },
            { value: "gita", label: "Gita" },
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
            { value: "ram", label: "Ram" },
            { value: "shyam", label: "Shyam" },
            { value: "hari", label: "Hari" },
            { value: "gita", label: "Gita" },
          ]}
        />
      </Col>

      <Col md={4} className="mb-4">
        <Select
          label="Vertical :"
          placeholder="Loading...vertical"
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
          label="Sub-Vertical :"
          placeholder="Loading...Sub-Vertical"
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

      <Col md={3}>
        <Button className="m-2">Search</Button>
        <Button className="m-2">Clear</Button>
        <Button className="m-2">Export</Button>
        <Button className="m-2"> View Tickets</Button>
      </Col>
    </Row>
  )
}

export default FilterComponent
