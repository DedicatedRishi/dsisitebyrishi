import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    if (toggleMenu) {
      document.getElementById("toggle").style.transform = "translateY(0)";
    } else {
      document.getElementById("toggle").style.transform = "translateY(-100%)";
    }
  }, [toggleMenu]);

  return (
    <nav className={styles.navbar}>
        <Link href="/">
      <div className={styles.logo}>
          <Image src="/digisat-transparent.gif" alt="digisat" layout="fill" objectFit="contain"/>
      </div>
        </Link>
      <div className={styles.navlist}>
        <ul className={styles.navlinks}>
          <li>
            <Link href="/" className={styles.links}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.links}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className={styles.links}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/products" className={styles.links}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.links}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.menu} onClick={()=>{setToggleMenu(true)}}>
        <div className={styles.hamline}></div>
        <div className={styles.hamline}></div>
        <div className={styles.hamline}></div>
      </div>
      <div className={styles.toggleMenu} id="toggle">
        <div
          id="cross"
          className={styles.cross}
          onClick={() => {
            setToggleMenu(false);
          }}
        >
          <Image
            layout="fill"
            objectFit="contain"
            src="/close-icon.png"
            alt="close"
          />
        </div>
        <ul className={styles.navlinkToggle}>
          <li>
            <Link
              href="/"
              className={styles.linkToggle}
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={styles.linkToggle}
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={styles.linkToggle}
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={styles.linkToggle}
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={styles.linkToggle}
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/training"
              className={styles.linkToggle}
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              Training
            </Link>
          </li>
          <li>
            <Link
              href="/careers"
              className={styles.linkToggle}
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={styles.linkToggle}
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
