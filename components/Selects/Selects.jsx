import React from 'react'
import styles from './SelectsImg.module.css'
import img1 from '../../assets/borabora.jpg'
import img2 from '../../assets/borabora2.jpg'
import img3 from '../../assets/keywest.jpg'
import img4 from '../../assets/maldives.jpg'
import img5 from '../../assets/maldives3.jpg'
import img6 from '../../assets/maldives2.jpg'
import SelectImg from './SelectImg'
export default function Selects() {
  const holder=[{pic:img1, name:"Emerald Bay"},
                {pic:img2, name:"Bora Bora"},
                {pic:img3, name:"Key West"},
                {pic:img4, name:"Barbados"},
                {pic:img5, name:"Maldives"},
                {pic:img6, name:"Grenada"}]
  return (
    <section className={styles.selects} id='views'>
      {holder.map(prev=>{
        return(
          <SelectImg 
          styles={styles}
          pic={prev.pic}
          name={prev.name}
          />
        )
      })}
      
    </section>
  )
}
