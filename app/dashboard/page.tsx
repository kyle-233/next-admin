
import { Card } from '@/components/card/Card'
import styles from './dashboard.module.css'
import { Rightbar } from '@/components/rightbar/Rightbar'
import { Transactions } from '@/components/transactions/Transactions'
import { Chart } from '@/components/chart/Chart'

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  )
}

export default Dashboard