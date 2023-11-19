import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Lama Dev</div>
        <div className={styles.text}>All rights reserved.</div>
    </div>
  )
}
