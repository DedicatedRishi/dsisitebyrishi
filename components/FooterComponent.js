import React from "react";
import Link from "next/link";
import { AiFillLinkedin, AiFillFacebook, AiFillPhone,AiOutlineMail } from "react-icons/ai";
import styles from "../styles/Footer.module.css";
const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.footerSection}>
      <div className={styles.linkSection}>
        <div className={styles.quickLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/training">Satcom Training</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com/Digisat-Skill-India-Pvt-Ltd-1143434842475591/" target="_blank">
              <AiFillFacebook color="#fff" fontSize={36} />
            </a>
            <a href="https://www.linkedin.com/company/digisat-skill-india18832525/" target="_blank">
              <AiFillLinkedin color="#fff" fontSize={36} />
            </a>
        </div>
      </div>
      <div className={styles.contactSection}>
        <h3>Find Us</h3>
        <div className={styles.findUs}>
        <div>Digisat Skill India Pvt Ltd. ( DSIPL)</div>
        <div>Plot no 3/2, IT Knowledge Park,</div>
        <div>MIDC Kharadi, Pune - 411014, India</div>
        <br />
        <div><AiOutlineMail color="#fff" fontSize={24} /> <a href="mailto:krish@digisat.in">krish@digisat.in</a></div>
        <div><AiFillPhone color="#fff" fontSize={24} /> <a href="tel:++91 98227 88197">+91 98227 88197</a></div>
        </div>
      </div>
      </div>
      <div className={styles.copyright}>Copyright &copy; 2023 Created by <a href="https://yeeshupushparag.github.io/" target="_blank" className={styles.creator}>Yeeshu Puashparag</a> - <a href="https://dedicatedrishi.github.io/profilewebrishi" target="_blank" className={styles.creator}>Rushikesh Dharme</a></div>
    </footer>
  );
};
export default FooterComponent;
