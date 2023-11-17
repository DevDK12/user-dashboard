// Importing necessary components for the Dashboard
import Card from "@/app/components/dashboard/card/card"; // Card component for displaying analytics data
import Chart from "@/app/components/dashboard/chart/chart"; // Chart component for displaying analytics chart
import styles from "@/app/components/dashboard/dashboard.module.css"; // CSS module for styling the Dashboard
import Rightbar from "@/app/components/dashboard/rightbar/rightbar"; // Rightbar component for displaying additional information or controls
import Transactions from "@/app/components/dashboard/transactions/transactions"; // Transactions component for displaying a list of recent transactions

// Importing analytics data for the cards
import {analyticsCards as cards} from "@/app/constants"; // Data for the analytics cards








/**
 * Dashboard Component
 * 
 * This component renders the main dashboard of the application.
 * 
 * It includes:
 * - A set of cards, each representing a piece of analytics data. The data for these cards is imported from the constants file.
 * - A Transactions component, which presumably displays a list of recent transactions.
 * - A Chart component, which presumably displays some sort of analytics chart.
 * - A Rightbar component, which presumably displays additional information or controls on the side of the dashboard.
 * 
 * The layout of these components is controlled by CSS modules, with styles imported from 'dashboard.module.css'.
 * 
 * @returns A JSX element representing the dashboard.
 */


const Dashboard = () => {

  
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>

          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
          
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
