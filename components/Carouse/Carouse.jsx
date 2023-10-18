import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './Carouse.module.css'
import img1 from '../../assets/borabora.jpg'
import img2 from '../../assets/borabora2.jpg'
import img3 from '../../assets/keywest.jpg'
import img4 from '../../assets/maldives.jpg'
import img5 from '../../assets/maldives3.jpg'
import img6 from '../../assets/maldives2.jpg'

export default function Carouse() {
  return (
    <section className={styles.content}>
        <Carousel className={styles.carousel} 
                  showArrows={false} 
                  autoPlay={true}
                  infiniteLoop={true}
                  interval={2000}
                  stopOnHover={false}
                    showThumbs={false}>
                <div className={styles.holder}>
                    <img src={img1} />
                </div>
                <div className={styles.holder}>
                    <img src={img2} />
                </div>
                <div className={styles.holder}>
                    <img src={img3} />
                </div>
                <div className={styles.holder}>
                    <img src={img4} />
                </div>
                <div className={styles.holder}>
                    <img src={img5} />
                </div>
                <div className={styles.holder}>
                    <img src={img6} />
                </div>
            </Carousel>
    </section>
  )
}
