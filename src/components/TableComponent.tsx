import React from "react"
import { Table, Paper } from "@mantine/core"
import { DataTable } from "mantine-datatable"
import { tableData } from "../static-data/TableData"
import { IconEdit, IconEye, IconSend, IconTrash } from "@tabler/icons-react"

const TableComponent = () => {
  const rows = tableData.map((element) => (
    <tr key={element?.ticketId}>
      <td>{element?.ticketId}</td>
      <td>{element?.customer}</td>
      <td>{element?.walletId}</td>
      <td>{element?.created}</td>
      <td>{element?.data}</td>
      <td>{element?.time}</td>
      <td>{element?.route}</td>
      <td>{element?.source}</td>
      <td>{element?.createdBy}</td>
      <td>{element?.project}</td>
      <td>{element?.vertical}</td>
      <td>{element?.subVertical}</td>
      <td>
        <div className="d-flex gap-3 table_icons_wrapper">
          <div className="single_icon">
            <IconEye color={"#95007f"} />
          </div>
          <div className="single_icon">
            <IconEdit color={"#4f4f4f"} />
          </div>
          <div className="single_icon">
            <IconTrash color={"#ff0000"} />
          </div>
          <div className="single_icon">
            <IconSend color={"#4089bf"} />
          </div>
        </div>
      </td>
    </tr>
  ))
  return (
    <div className="ticket_table_wrapper">
      <Paper shadow="sm">
        <Table
          horizontalSpacing="xl"
          verticalSpacing="md"
          withBorder
          withColumnBorders
        >
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Agent/Customer</th>
              <th>Wallet Id</th>
              <th>Created</th>
              <th>Date</th>
              <th>Time</th>
              <th>Route</th>
              <th>Source</th>
              <th>Created By</th>
              <th>Project</th>
              <th>Vertical</th>
              <th>Sub Vertical</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Paper>
    </div>
  )
}

export default TableComponent
