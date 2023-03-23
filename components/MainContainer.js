import Image from 'next/legacy/image';
import React from 'react'
import styles from "../styles/MainContainer.module.css";
import Link from 'next/link';
import { useEffect } from 'react'

const MainContainer = () => {
  useEffect(() => {
    let welcomeText = document.getElementById("welcome-text")
    let readMoreBtn = document.getElementById("read-more")
    const observer = new IntersectionObserver((obj)=>{
      obj.forEach((item)=>{
        item.target.classList.toggle("zoom-animation",item.isIntersecting)
      })
  });
  observer.observe(welcomeText)
  observer.observe(readMoreBtn)
  }, [])
  return (
    <main className={styles.MainContainer}>
        <div className={styles.welhead} id="welcome-text"><p>Welcome To Digisat Skill India Pvt Ltd (DSIPL)</p></div>
<div className={styles.welpara}><p>Digisat Skill India Pvt Ltd (DSIPL) has served the Satellite Communication industry since 2000. A cluster of well Trained, experienced and highly qualified team of Engineers provides complete technical solution for any type of satellite communication application, which includes System Engineering, Installation and Maintenance of Earth Station Antennas, System Integration & Earth Station Equipment Electronics.</p></div>
<div className={styles.btnSection}>
    <Link href="/about"><button id="read-more">Read More</button></Link>
</div>
    </main>
  )
}

export default MainContainer