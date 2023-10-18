import React from 'react'
import styles from './Hero.module.css'
import bgVdo from '../../assets/maldivesVideo.mp4'
import {BiSearch} from 'react-icons/bi'

function Hero() {
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <section className={styles.hero} id='home'>
      <video autoPlay loop muted id={styles.video}>
        <source src={bgVdo} type='video/mp4' />
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
         <h1 className={styles.title}>Top Class Travel</h1>
         <h2>Top 1% Location Worldwide</h2>
         <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Search Destination' />
          <button className={styles.search}><BiSearch /></button>
         </form>
      </div>
    </section>
  )
}

export default Hero