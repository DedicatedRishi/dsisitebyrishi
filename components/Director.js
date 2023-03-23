import React from 'react'
import Image from 'next/legacy/image'
import styles from "../styles/Director.module.css"
const Director = () => {
  return (
    <div className={styles.director}>
      <div className={styles.firstHalf}>
            <div className={styles.directorImage}>
              <Image src="/director.jpg" layout='fill' objectFit='contain' alt='director'/>
            </div>
      </div>
            <div className={styles.secondHalf}>
        <h2>Director&apos;s Words</h2>
        <div className={styles.aboutDirector}>
            <div className={styles.quoteImage}>
        <Image
          layout="fill"
          objectFit="contain"
          src="/quote.png"
          alt="menu"
          />
          </div>
          <div className={styles.directorWords}>
          <p>Focusing on the digitization of India through our capability and innovative services. Join us and be a part of this revolution.ISTC has led the effort in Digitization and in development of skilled engineers in the field of Satellite Communications across the nation.</p>
        </div>
        <div className={styles.quoteImage}>
        <Image
          layout="fill"
          objectFit="contain"
          src="/quote.png"
          alt="menu"
          />
          </div>
          </div>
          <div className={styles.directorName}>
            <p className={styles.name}>Krish Mehkarkar</p>
            <p className={styles.founder}>CEO &amp; Founder </p>
          </div>
          </div>
    </div>
  )
}

export default Director