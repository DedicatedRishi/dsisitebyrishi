import React from 'react'
import Head from "next/head";
import Image from "next/legacy/image";
import styles from "../../styles/Products/Malibu.module.css";

export default function MalibuAntenna() {
  return (
    <>
     <Head>
     <title>Malibu Antenna | Digisat</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head> 
    <div className={styles.malibuAntenna}>
<div className={styles.malibuHead}>
<h2>Malibu Antenna</h2>
</div>
<div className={styles.malibuContent}>
<div className={styles.aboutMalibu}>
<div className={styles.malibuImg}>
<Image src="/malibu-antenna.jpg" layout='fill' objectFit='contain' alt='malibu-antenna'/>
</div>
<h3>Earth Station Antennas(1.8 Meters)
</h3>
<p>Malibu Antenna specializes in the sales, installation and support of satellite antennas and antenna control systems and support hardware. We also offer antennas from 1.8 Meters to 20 Meters in multiple configurations. Additionally, Malibu Antenna excels in providing pre sales consultation backed up by post sale support along with providing intelligent integration and hardware solutions.</p>
</div>
<div className={styles.accessory}>
<h4>Antenna Accessory</h4>
<ul>
    <li>Motorization Kits</li>
    <li>Limit Switches</li>
    <li>Inclined orbit tracking controller</li>
    <li>ODU Support Kits</li>
    <li>Factory Feed System Testing and Documentation</li>
    <li>Export Packaging</li>
    <li>Foundation Kit</li>
    <li>Lightning Rod Kit</li>
    <li>Grounding Kit</li>
    <li>Cable-Mounting Kit</li>
    <li>Major Subsystem Spare Part Kits</li>
    <li>Anti-icing and Deicing</li>
</ul>
</div>
<div className={styles.features}>
<h4>
    Features
</h4>
<ul>
    <li>Meets or Exceeds CCIR 580 and INTELSAT Requirements</li>
    <li>Ring Focus</li>
    <li>High G / T, Excellent Pattern Characteristics</li>
    <li>Hot-dipped Galvanized Steel Ground Mount Assembly</li>
    <li>C-band Antenna Operating in 800MHz Bandwidth</li>
    <li>2-port, 3-port or 4-port Linear / Circular Feed</li>
    <li>Field Changeable Feed System, Switchable Circular to Linear C-band</li>
</ul>
</div>
</div>
    </div>
    </>
  )
}