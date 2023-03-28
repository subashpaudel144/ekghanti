import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { Col, Row } from "react-bootstrap"

const Charts = () => {
  ChartJS.register(ArcElement, Tooltip, Legend)
  const imeData = {
    labels: ["IME Pay", "IME Remit", "Call Not Connected"],
    datasets: [
      {
        label: "Ime dataset",
        data: [834, 753, 186],
        backgroundColor: [
          "rgb(222 157 246)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  }

  const priorityData = {
    labels: ["urgent", "high"],

    datasets: [
      {
        data: [75, 35],
        backgroundColor: ["rgb(0,128,0)", "rgb(0,0,128)"],
        hoverOffset: 4,
      },
    ],
  }

  const taskData = {
    labels: [
      "in progress",
      "closed",
      "raised and called",
      "closed_call_not_connected",
    ],

    datasets: [
      {
        data: [2, 4, 90, 30],
        backgroundColor: [
          "rgb(255, 205, 86)",
          "rgb(0 189 193)",
          "rgb(0, 175, 202",
          "rgb(0, 106, 138)",
        ],
        hoverOffset: 4,
      },
    ],
  }

  return (
    <div className="charts_wrapper">
      <Row>
        <Col md={4} xs={12}>
          <Doughnut data={imeData} />
        </Col>

        <Col md={4} xs={12}>
          <Doughnut data={priorityData} />
        </Col>

        <Col md={4} xs={12}>
          <Doughnut data={taskData} />
        </Col>
      </Row>

      <div className="mt-5 chart_cards">
        <Row className="g-3">
          <Col md={4} xs={12}>
            <div className="single_card">
              <h5>IME Pay</h5>
              <p>834</p>
            </div>
          </Col>

          <Col md={4} xs={12}>
            <div className="single_card">
              <h5>IME Remit</h5>
              <p>753</p>
            </div>
          </Col>

          <Col md={4} xs={12}>
            <div className="single_card">
              <h5>Call Not Connected</h5>
              <p>186</p>
            </div>
          </Col>

          <Col md={4} xs={12}>
            <div className="single_card">
              <h5>Total</h5>
              <p>1773</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Charts
