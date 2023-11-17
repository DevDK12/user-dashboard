"use client"

// Importing necessary packages, components, and styles for the Chart component
import styles from './chart.module.css'; // CSS module for styling the Chart component
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // Components from recharts for creating a line chart
import { chartData as data } from "@/app/constants"; // Data for the chart





/**
 * Chart Component
 * 
 * This component is responsible for rendering a line chart.
 * 
 * It uses several components from recharts:
 * - LineChart to create the line chart.
 * - Line to create the lines in the chart.
 * - XAxis and YAxis to create the x-axis and y-axis of the chart.
 * - Tooltip to create a tooltip that displays the data of a specific point in the chart when hovered over.
 * - Legend to create a legend that explains what each line in the chart represents.
 * - ResponsiveContainer to make the chart responsive.
 * 
 * It uses the chartData from "@/app/constants" as the data for the chart.
 * 
 * The layout of this component is controlled by CSS modules, with styles imported from 'chart.module.css'.
 * 
 * @returns A JSX element representing a line chart.
 */

const Chart = () => {
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart