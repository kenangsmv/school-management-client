import React from 'react'
import styles from "./Landing.module.scss"

const Landing = () => {
  return (
    <div className={styles['role-selection']}>
      <ul >
        <li className={styles['deneme']}>Ogrenci Girisi</li>
        <li>Akademisyen girisi</li>
        <li>Admin girisi</li>
      </ul>
    </div>
  )
}

export default Landing
