import React from 'react'
import styles from './Footer.module.css'
import {BsInstagram, BsLinkedin, BsGithub}from 'react-icons/bs'
export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h3>BEACHES</h3>
          <div className={styles.social}>
             <a href='https://www.instagram.com/_.akash_desai/' target='_blank'><BsInstagram className={styles.icon}/></a>
             <a href='https://www.linkedin.com/in/akash-s-404069108/' target='_blank'><BsLinkedin className={styles.icon}/></a>
             <a href='https://github.com/akashsdesai' target='_blank'><BsGithub className={styles.icon}/></a>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <ul>
              <li>About</li>
              <li>Partner</li>
              <li>Carrers</li>
              <li>Newsroom</li>
              <li>Advertising</li>
            </ul>
          </div>
          <div className={styles.right}>
            <ul>
              <li>Contact</li>
              <li>Terms</li>
              <li>Policy</li>
              <li>Privacy</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
