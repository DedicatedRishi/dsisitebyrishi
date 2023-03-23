import Image from 'next/legacy/image';
import React from 'react'
import styles from "../styles/Services.module.css";

const ServicesComponent = () => {
  return (
    <section className={styles.srvSection}>
        <h2 className={styles.srvheading}>Our Services</h2>
        <div className={styles.srvlist}>
            <div className={styles.service}>
                <div className={styles.srvImage}>
                    <Image src="/installation.png" layout='fill' objectFit='cover'/>
                </div>
                <div className={styles.srvDetail}>
                    <div className={styles.srvName}>INSTALLATION & COMMISSIONING AND NOCC TESTING</div>
                    <div className={styles.srvPara}>We have a massive experience and knowledge towards installation and commissioning of earth station antennas.</div>
                </div>
            </div>
            <div className={styles.service}>
                <div className={styles.srvImage}>
                    <Image src="/painting.png" layout='fill' objectFit='cover'/>
                </div>
                <div className={styles.srvDetail}>
                    <div className={styles.srvName}>ANTENNA CLEANING & PAINTING</div>
                    <div className={styles.srvPara}>We have a huge experience with painting of antennas with industrial polyurethane products.</div>
                </div>
            </div>
            <div className={styles.service}>
                <div className={styles.srvImage}>
                    <Image src="/foundation.png" layout='fill' objectFit='cover'/>
                </div>
                <div className={styles.srvDetail}>
                    <div className={styles.srvName}>ANTENNA FOUNDATION & RELATED CIVIL WORKS</div>
                    <div className={styles.srvPara}>Antenna Foundation designing, soil testing and executing it are one of our major skills.</div>
                </div>
            </div>
            <div className={styles.service}>
                <div className={styles.srvImage}>
                    <Image src="/upgradation.jpg" layout='fill' objectFit='cover'/>
                </div>
                <div className={styles.srvDetail}>
                    <div className={styles.srvName}>UPGRADATION / RELOCATION OF ANTENNA AND SUB-SYSTEMS</div>
                    <div className={styles.srvPara}>Upgrading your existing antenna system has countless benefits.</div>
                </div>
            </div>
            <div className={styles.service}>
                <div className={styles.srvImage}>
                    <Image src="/maintainance.png" layout='fill' objectFit='cover'/>
                </div>
                <div className={styles.srvDetail}>
                    <div className={styles.srvName}>ANNUAL MAINTENANCE, REPLACEMENT & REPAIRS</div>
                    <div className={styles.srvPara}>One of our key service we provide is Repair and Annual maintenance contracts for complete Earth station.</div>
                </div>
            </div>
            <div className={styles.service}>
                <div className={styles.srvImage}>
                    <Image src="/training.jpg" layout='fill' objectFit='cover'/>
                </div>
                <div className={styles.srvDetail}>
                    <div className={styles.srvName}>SKILL SATCOM TRAINING</div>
                    <div className={styles.srvPara}>We at Digisat provide skill development training to the freshers by our highly talented team.</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServicesComponent