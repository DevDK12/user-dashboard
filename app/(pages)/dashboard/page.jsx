import Card from "@/app/components/dashboard/card/card";
import Chart from "@/app/components/dashboard/chart/chart";
import styles from "@/app/components/dashboard/dashboard.module.css";
import Rightbar from "@/app/components/dashboard/rightbar/rightbar";
import Transactions from "@/app/components/dashboard/transactions/transactions";

import {analyticsCards as cards} from "@/app/constants";











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
