import React from 'react'
import styles from './Destinations.module.css'
import img1 from '../../assets/borabora.jpg'
import img2 from '../../assets/borabora2.jpg'
import img3 from '../../assets/keywest.jpg'
import img4 from '../../assets/maldives.jpg'
import img5 from '../../assets/maldives3.jpg'
export default function Destinations() {
  const place =[img1, img2, img3, img4]
  return (
    <section className={styles.destinations} id='destination'>
      <div className={styles.titles}>
        <h1 className={styles.title}>All-Inclusive Resorts</h1>
        <h3 className={styles.subTitle}>On the Caribean's Best Beaches</h3>
      </div>
      <div className={styles.places}>
        <div className={styles.mainPlace}>
          <img src={img5} />
        </div>
        <div className={styles.subPlace}>
          {place.map(imgs=>{
            return(
              <img src={imgs} />
            )
          })}
        </div>
      </div>
    </section>
  )
}
