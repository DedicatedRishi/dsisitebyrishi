import React from 'react'
import Image from 'next/legacy/image'
import styles from "../styles/Partners.module.css"
const Partners = () => {
  return (
    <section className={styles.partnerSection}>
      <div className={styles.satcomPartner}>
      <h2>Satcom Partner</h2>
      <div className={styles.satComPartnerImg}>
          <Image src="/Hughes_Network_Systems_Logo.jpg" layout='fill' objectFit='contain' alt="Hughes_Network_Systems"/>
      </div>
    </div>
      <div className={styles.dthPartner}>
    <h2>DTH Partners</h2>
    <div className={styles.partnersList}>
        <div className={styles.partner}>
            <Image src="/dishtv.png" layout='fill' objectFit='contain'  alt="partners"/>
        </div>
        <div className={styles.partner}>
            <Image src="/d2h.png" layout='fill' objectFit='contain'  alt="partners"/>
        </div>
        <div className={styles.partner}>
            <Image src="/airtel.jpg" layout='fill' objectFit='contain'  alt="partners"/>
        </div>
    </div>
    </div>
    </section>
  )
}

export default Partners