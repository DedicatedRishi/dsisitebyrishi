import React from 'react'
import Head from "next/head"
import Image from "next/legacy/image"
import styles from "../styles/Projects.module.css"
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

export default function Projects() {
  const [playVideo1, setPlayVideo1] = React.useState(false);
  const [playVideo2, setPlayVideo2] = React.useState(false);
  const [playVideo3, setPlayVideo3] = React.useState(false);
  const vidRef1 = React.useRef();
  const vidRef2 = React.useRef();
  const vidRef3 = React.useRef();
  return (
    <>
     <Head>
     <title>Projects | Digisat</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/products/favicon.ico" />
     </Head> 
     <div className={styles.projects}>
<div className={styles.projectsHead}>
<h2>Projects</h2>
</div>
<div className={styles.projectsContent}>
<h3>Vertex RSI. GDsatcom USA made. 9.0 m/ 9.1m/ 9.3 mtr C, Ku & Ka band</h3>
<div className={styles.section}>
<div className={styles.antennaImg}>
<Image src="/9-meter-foundation1.jpg" layout='fill' objectFit='cover'/>
</div>
<div className={styles.antennaImg}>
<Image src="/9-meter-foundation2.jpg" layout='fill' objectFit='cover'/>
</div>
<div className={styles.antennaImg}>
<Image src="/9-meter-1.jpg" layout='fill' objectFit='cover'/>
</div>
<div className={styles.antennaImg}>
<Image src="/9-meter-2.jpg" layout='fill' objectFit='cover'/>
</div>
<div className={styles.antennaImg}>
<Image src="/9-meter-3.jpg" layout='fill' objectFit='cover'/>
</div>
<div className={styles.antennaImg}>
<Image src="/9-meter-4.jpg" layout='fill' objectFit='cover'/>
</div>
</div>
<h3>TX Pattern Andrew Antenna 9.4mtr</h3>
<div className={styles.section}>
<div className={styles.antennaImg}>
<Image src="/9-meter-test-1.jpg" layout='fill' objectFit='cover'/>
</div>
<div className={styles.antennaImg}>
<Image src="/9-meter-test-2.png" layout='fill' objectFit='cover'/>
</div>
</div>
<h3>C Band 7.6m Antennas</h3>
<div className={styles.section}>
<div className={styles.antennaImg}>
<Image src="/7.6-meter-6.jpg" objectFit='cover' layout='fill'/>
</div>
<div className={styles.antennaImg}>
<Image src="/7.6-meter-5.jpg" objectFit='cover' layout='fill'/>
</div>
<div className={styles.antennaImg}>
<Image src="/7.6-meter-7.jpg" objectFit='cover' layout='fill'/>
</div>
<div className={styles.antennaImg}>
<Image src="/7.6-meter-1.jpg" objectFit='cover' layout='fill'/>
</div>
<div className={styles.antennaImg}>
<Image src="/7.6-meter-2.jpg" objectFit='cover' layout='fill'/>
</div>
<div className={styles.antennaImg}>
<Image src="/7.6-meter-3.jpg" objectFit='cover' layout='fill'/>
</div>
<div className={styles.antennaImg}>
<Image src="/7.6-meter-4.jpg" objectFit='cover' layout='fill'/>
</div>
<div className={styles.antennaImg}>
<Image src="/7.6-meter-8.jpg" objectFit='cover' layout='fill'/>
</div>
<div className="app__video">
      <video
        ref={vidRef1}
        src="/7.6-meter.mp4"
        type="video/mp4"
        loop
        controls={false}
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo1(!playVideo1);
            if (playVideo1) {
              vidRef1.current.pause();
            } else {
              vidRef1.current.play();
            }
          }}
        >
          {playVideo1 ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
</div>
<h3>Ku band 1.2mtr FRP Antenna</h3>
<div className={styles.section}>
  <div className={styles.antennaImg}>
<Image src="/one-p-two-1.jpg" objectFit='cover' layout='fill'/>
  </div>
  <div className={styles.antennaImg}>
<Image src="/one-p-two-2.jpg" objectFit='cover' layout='fill'/>
  </div>
  <div className={styles.antennaImg}>
<Image src="/one-p-two-3.jpg" objectFit='cover' layout='fill'/>
  </div>
  <div className={styles.antennaImg}>
<Image src="/one-p-two-4.jpg" objectFit='cover' layout='fill'/>
  </div>
  <div className="app__video">
      <video
        ref={vidRef2}
        src="/1.2-meter.mp4"
        type="video/mp4"
        loop
        controls={false}
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo2(!playVideo2);
            if (playVideo2) {
              vidRef2.current.pause();
            } else {
              vidRef2.current.play();
            }
          }}
        >
          {playVideo2 ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
</div>
<h3>Carbon fiber 1 mtr Antenna</h3>
  <div className={styles.section}>
<div className={styles.antennaImg}>
<Image src="/one-meter-1.jpg" layout='fill' objectFit='cover'/>
</div>
<div className={styles.antennaImg}>
<Image src="/one-meter-2.jpg" layout='fill' objectFit='cover'/>
</div>
<div className={styles.antennaImg}>
<Image src="/one-meter-3.jpg" layout='fill' objectFit='cover'/>
</div>
<div className={styles.antennaImg}>
<Image src="/one-meter-4.jpg" layout='fill' objectFit='cover'/>
</div>
<div className="app__video">
      <video
        ref={vidRef3}
        src="/1-meter.mp4"
        type="video/mp4"
        loop
        controls={false}
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo3(!playVideo3);
            if (playVideo3) {
              vidRef3.current.pause();
            } else {
              vidRef3.current.play();
            }
          }}
        >
          {playVideo3 ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
</div>
</div>
     </div>
    </>
  )
}
